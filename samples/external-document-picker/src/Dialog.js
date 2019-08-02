import React from 'react';
import './App.css';
import TextField from "@material-ui/core/TextField/TextField";
import Fab from "@material-ui/core/Fab/Fab";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import GridListTile from "@material-ui/core/GridListTile/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar/GridListTileBar";
import GridList from "@material-ui/core/GridList/GridList";
import Fade from "@material-ui/core/Fade/Fade";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import Dialog from "@material-ui/core/Dialog/Dialog";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import Chip from "@material-ui/core/Chip/Chip";
import Avatar from "@material-ui/core/Avatar/Avatar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";

const dataMode = {
  SINGLE: 'single',
  MULTIPLE: 'multiple'
}

const galleryType = {
  GALLERY: 'Gallery',
  LIST: 'List'
}

class ExtPickerDialog extends React.Component {

  constructor (props) {
    super(props)

    this.ui = props.ui;

    this.onScroll = this.onScroll.bind(this);
    this.onOk = this.onOk.bind(this);

    this.extensionConfig = JSON.parse(this.ui.extension.config);
    this.application = this.extensionConfig.application;
    if (this.extensionConfig.dataMode === dataMode.SINGLE) {
      this.dataMode = dataMode.SINGLE;
    } else {
      this.dataMode = dataMode.MULTIPLE;
    }
    this.urlEndpoint = this.ui.baseUrl + 'edp/' + this.application;
    this.state = {
      items: [],
      query: this.extensionConfig.query,
      page: 1,
      pageSize: this.extensionConfig.pageSize,
      isLoading: false,
      hasMore: true,
      selectedItems: [],
      open: false,
      galleryType: galleryType.GALLERY
    };

    this.clientId = this.extensionConfig.clientId;

    this.useStyles = makeStyles(theme => ({
      grow: {
        flexGrow: 1
      },
      search: {
        flexGrow: 1,
      }
    }));

    this.extDialog = React.createRef();
  }

  componentDidMount () {
    this.setInitialSelected(this.ui)
      .then(this.fetchItems(this.state.query, this.state.page, this.state.pageSize)
        .then(items => this.setState({items: items})));
  }

  onScroll () {
    const container = this.extDialog.current;
    const scrollY = container.scrollHeight - container.scrollTop;
    const height = container.offsetHeight;
    const offset = height - scrollY;

    if ((offset === 0 || offset === 1) && !this.state.isLoading) {
      this.fetchItems(this.state.query, this.state.page + 1, this.state.pageSize)
        .then(newItems => this.state.items.concat(newItems))
        .then(items => this.setState({items: items, page: this.state.page + 1}));
    }
  }

  async setInitialSelected (ui) {
    try {
      const options = await ui.dialog.options();
      const items = JSON.parse(options.value);
      this.setState({selectedItems: items});
    } catch (error) {
      console.error('Failed to register extension:', error.message);
      console.error('- error code:', error.code);
    }
  }

  addItem (item) {
    if (this.dataMode === dataMode.SINGLE) {
      const items = [];
      items.push(item);
      this.setState({selectedItems: items});
      this.ui.dialog.close(items);
    } else {
      const items = this.state.selectedItems;
      items.push(item);
      this.setState({selectedItems: items});
    }
  }

  deleteItem (item) {
    const items = this.state.selectedItems.filter(value => value.id !== item.id);
    this.setState({selectedItems: items});
  }

  async fetchItems (query, page, pageSize) {
    this.setState({isLoading: true});
    const fetched = await fetch(this.urlEndpoint + '/search?query=' + query + '&page=' + page + '&pageSize=' + pageSize + "&clientId=" + this.clientId)
      .then(response => response.json());
    this.setState({isLoading: false});
    return fetched;
  }

  changeQuery (value) {
    this.setState({query: value, page: 1})
    this.fetchItems(value, this.state.page, this.state.pageSize).then(items => this.setState({items: items}))
  }

  onOk () {
    this.ui.dialog.close(this.state.selectedItems);
  }

  render () {
    const {isLoading} = this.state || false;
    const {items} = this.state || [];
    const {selectedItems} = this.state || [];
    const classes = this.useStyles;
    const isMultiMode = this.dataMode === dataMode.MULTIPLE;

    return <Dialog fullScreen open={true}>
      <AppBar position="static" color="default">
        <Toolbar>
          <TextField
            className={classes.search}
            autoFocus
            margin="dense"
            id="search"
            label="Search"
            type="text"
            fullWidth
            onChange={event => this.changeQuery(event.target.value)}
          />
          <IconButton disabled={true}>
            <SvgIcon>
              <path fill="#000000" d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"/>
            </SvgIcon>
          </IconButton>
          <IconButton disabled={true}>
            <SvgIcon>
              <path fill="#000000" d="M3,4H21V8H3V4M3,10H21V14H3V10M3,16H21V20H3V16Z"/>
            </SvgIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent ref={this.extDialog} onScroll={this.onScroll}>
        <GridList>
          {items.map((p, id) =>
            <GridListTile key={id}>
              <img src={p.image} alt={p.title}/>
              <GridListTileBar
                title={p.title}
                subtitle={<span>{p.description}</span>}
                actionIcon={(selectedItems.some(e => e.id === p.id)) ?
                  <Fab color="secondary" aria-label="Delete">
                    <DeleteIcon onClick={event => this.deleteItem(p)}/>
                  </Fab> :
                  <Fab color="primary" aria-label="Add">
                    <AddIcon onClick={event => this.addItem(p)}/>
                  </Fab>}
              />
            </GridListTile>
          )}
        </GridList>
      </DialogContent>
      <Fade
        in={isLoading}
        style={{
          zIndex: 9999999, position: 'fixed', bottom: 0, right: 0,
          transitionDelay: isLoading ? '800ms' : '0ms',
        }}
        unmountOnExit>
        <CircularProgress/>
      </Fade>
      {isMultiMode && <Toolbar>
        <Typography variant="h6">
          Selected:
        </Typography>
        <div style={{flex: 5}}>
          {selectedItems.map((p, id) =>
            <Chip key={id}
                  size={'small'}
                  avatar={<Avatar src={p.image ? p.image : 'default'}></Avatar>}
                  label={p.title}
            />
          )}
        </div>
        <Button style={{flex: 1}} color="inherit" onClick={this.onOk}>Ok</Button>
      </Toolbar>
      }
    </Dialog>
  }
}

export default ExtPickerDialog;


