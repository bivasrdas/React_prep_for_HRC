import React from 'react';
import theme from '../utils/theme'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import axios from 'axios'
let counter = 0;
function createData(pk_id,acct_doc_header_id,company_id,document_number,document_number_norm,business_code,create_year,document_line_number,doctype,customer_number,customer_number_norm,fk_customer_map_id,customer_name,division,document_create_date,document_create_date_norm,posting_date,posting_date_norm,posting_id,due_date,due_date_norm,order_date,order_date_norm,invoice_id,invoice_id_norm,baseline_create_date,invoice_date_norm,total_open_amount,total_open_amount_norm,cust_payment_terms,business_area,ship_date,ship_to,clearing_date,clearing_date_norm,reason_code,isOpen,discount_due_date_norm,debit_credit_indicator,payment_method,document_creation_date,invoice_amount_doc_currency,document_id,actual_open_amount,paid_amount,dayspast_due,invoice_age,disputed_amount) {
  counter += 1;
  return { id: pk_id,acct_doc_header_id,company_id,document_number,document_number_norm,business_code,create_year,document_line_number,doctype,customer_number,customer_number_norm,fk_customer_map_id,customer_name,division,document_create_date,document_create_date_norm,posting_date,posting_date_norm,posting_id,due_date,due_date_norm,order_date,order_date_norm,invoice_id,invoice_id_norm,baseline_create_date,invoice_date_norm,total_open_amount,total_open_amount_norm,cust_payment_terms,business_area,ship_date,ship_to,clearing_date,clearing_date_norm,reason_code,isOpen,discount_due_date_norm,debit_credit_indicator,payment_method,document_creation_date,invoice_amount_doc_currency,document_id,actual_open_amount,paid_amount,dayspast_due,invoice_age,disputed_amount};
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
    {id: 'pk_id', numeric: true, disablePadding: false, label: 'pk_id'},
  {id: 'acct_doc_header_id', numeric: true, disablePadding: false, label: 'acct_doc_header_id'},
	{id: 'company_id', numeric: true, disablePadding: false, label: 'company_id'},
	{id: 'document_number', numeric: true, disablePadding: false, label: 'document_number'},
	{id: 'document_number_norm', numeric: true, disablePadding: false, label: 'document_number_norm'},
	{id: 'business_code', numeric: false, disablePadding: true, label: 'business_code'},
	{id: 'create_year', numeric: false, disablePadding: true, label: 'create_year'},
	{id: 'document_line_number', numeric: true, disablePadding: false, label: 'document_line_number'},
	{id: 'doctype', numeric: false, disablePadding: true, label: 'doctype'},
	{id: 'customer_number', numeric: true, disablePadding: false, label: 'customer_number'},
	{id: 'customer_number_norm', numeric: true, disablePadding: false, label: 'customer_number_norm'},
	{id: 'fk_customer_map_id', numeric: true, disablePadding: false, label: 'fk_customer_map_id'},
	{id: 'customer_name', numeric: false, disablePadding: true, label: 'customer_name'},
	{id: 'division', numeric: false, disablePadding: true, label: 'division'},
	{id: 'document_create_date', numeric: false, disablePadding: true, label: 'document_create_date'},
	{id: 'document_create_date_norm', numeric: false, disablePadding: true, label: 'document_create_date_norm'},
	{id: 'posting_date', numeric: false, disablePadding: true, label: 'posting_date'},
	{id: 'posting_date_norm', numeric: false, disablePadding: true, label: 'posting_date_norm'},
	{id: 'posting_id', numeric: false, disablePadding: true, label: 'posting_id'},
	{id: 'due_date', numeric: false, disablePadding: true, label: 'due_date'},
	{id: 'due_date_norm', numeric: false, disablePadding: true, label: 'due_date_norm'},
	{id: 'order_date', numeric: false, disablePadding: true, label: 'order_date'},
	{id: 'order_date_norm', numeric: false, disablePadding: true, label: 'order_date_norm'},
	{id: 'invoice_id', numeric: true, disablePadding: false, label: 'invoice_id'},
	{id: 'invoice_id_norm', numeric: true, disablePadding: false, label: 'invoice_id_norm'},
	{id: 'baseline_create_date', numeric: false, disablePadding: true, label: 'baseline_create_date'},
	{id: 'invoice_date_norm', numeric: false, disablePadding: true, label: 'invoice_date_norm'},
	{id: 'total_open_amount', numeric: true, disablePadding: false, label: 'total_open_amount'},
	{id: 'total_open_amount_norm', numeric: true, disablePadding: false, label: 'total_open_amount_norm'},
	{id: 'cust_payment_terms', numeric: true, disablePadding: false, label: 'cust_payment_terms'},
	{id: 'business_area', numeric: false, disablePadding: true, label: 'business_area'},
	{id: 'ship_date', numeric: false, disablePadding: true, label: 'ship_date'},
	{id: 'ship_to', numeric: false, disablePadding: true, label: 'ship_to'},
	{id: 'clearing_date', numeric: false, disablePadding: true, label: 'clearing_date'},
	{id: 'clearing_date_norm', numeric: false, disablePadding: true, label: 'clearing_date_norm'},
	{id: 'reason_code', numeric: false, disablePadding: true, label: 'reason_code'},
	{id: 'isOpen', numeric: true, disablePadding: false, label: 'isOpen'},
	{id: 'discount_due_date_norm', numeric: false, disablePadding: true, label: 'discount_due_date_norm'},
	{id: 'debit_credit_indicator', numeric: false, disablePadding: true, label: 'debit_credit_indicator'},
	{id: 'payment_method', numeric: false, disablePadding: true, label: 'payment_method'},
	{id: 'document_creation_date', numeric: false, disablePadding: true, label: 'document_creation_date'},
	{id: 'invoice_amount_doc_currency', numeric: true, disablePadding: false, label: 'invoice_amount_doc_currency'},
	{id: 'document_id', numeric: true, disablePadding: false, label: 'document_id'},
	{id: 'actual_open_amount', numeric: true, disablePadding: false, label: 'actual_open_amount'},
	{id: 'paid_amount', numeric: true, disablePadding: false, label: 'paid_amount'},
	{id: 'dayspast_due', numeric: true, disablePadding: false, label: 'dayspast_due'},
	{id: 'invoice_age', numeric: true, disablePadding: false, label: 'invoice_age'},
	{id: 'disputed_amount', numeric: true, disablePadding: false, label: 'disputed_amount'},
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
    backgroundColor:theme.palette.primary.main
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor:lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor:theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            Invoice
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
         <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title = "Predict">
            <Button>Predict</Button>
            </Tooltip>
          /* <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>*/
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  pagination:{
    backgroundColor:theme.palette.primary.main,
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor:'#252C48'
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
    constructor(props) {
      super(props)
    
  this.state = {
    /*order: 'asc',
    orderBy: 'calories',*/
    selected: [],
    posts: [],
      /*createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Donut', 452, 25.0, 51, 4.9),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Honeycomb', 408, 3.2, 87, 6.5),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Jelly Bean', 375, 0.0, 94, 0.0),
      createData('KitKat', 518, 26.0, 65, 7.0),
      createData('Lollipop', 392, 0.2, 98, 0.0),
      createData('Marshmallow', 318, 0, 81, 2.0),
      createData('Nougat', 360, 19.0, 9, 37.0),
      createData('Oreo', 437, 18.0, 63, 4.0),
    ],*/
    page: 0,
    rowsPerPage: 5,
  };
    }
    componentDidMount(){
        axios.get('http://localhost:8080/Summer_Internship_Backend/json.do')
        .then(response =>{
            console.log(response)
            this.setState({posts: response.data})
            
        })
        .catch(error => {
            console.log(error)
        })
    }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.posts.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
   // const {p} = this.state;
    const { classes } = this.props;
    const { posts, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, posts.length - page * rowsPerPage);
    console.log(posts)

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={posts.length}
            />
            <TableBody> 
              {stableSort(posts, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.pk_id}
                      </TableCell>
                      <TableCell align="right">{n.acct_doc_header_id}</TableCell>
                      <TableCell align="right">{n.company_id}</TableCell>
                      <TableCell align="right">{n.document_number}</TableCell>
                      <TableCell align="right">{n.document_number_norm}</TableCell>
                      <TableCell align="right">{n.business_code}</TableCell>
                      <TableCell align="right">{n.create_year}</TableCell>
                      <TableCell align="right">{n.document_line_number}</TableCell>
                      <TableCell align="right">{n.doctype}</TableCell>
                      <TableCell align="right">{n.customer_number}</TableCell>
                      <TableCell align="right">{n.customer_number_norm}</TableCell>
                      <TableCell align="right">{n.fk_customer_map_id}</TableCell>
                      <TableCell align="right">{n.customer_name}</TableCell>
                      <TableCell align="right">{n.division}</TableCell>
                      <TableCell align="right">{n.document_create_date}</TableCell>
                      <TableCell align="right">{n.document_create_date_norm}</TableCell>
                      <TableCell align="right">{n.posting_date}</TableCell>
                      <TableCell align="right">{n.posting_date_norm}</TableCell>
                      <TableCell align="right">{n.posting_id}</TableCell>
                      <TableCell align="right">{n.due_date}</TableCell>
                      <TableCell align="right">{n.due_date_norm}</TableCell>
                      <TableCell align="right">{n.order_date}</TableCell>
                      <TableCell align="right">{n.order_date_norm}</TableCell>
                      <TableCell align="right">{n.invoice_id}</TableCell>
                      <TableCell align="right">{n.invoice_id_norm}</TableCell>
                      <TableCell align="right">{n.baseline_create_date}</TableCell>
                      <TableCell align="right">{n.invoice_date_norm}</TableCell>
                      <TableCell align="right">{n.total_open_amount}</TableCell>
                      <TableCell align="right">{n.total_open_amount_norm}</TableCell>
                      <TableCell align="right">{n.cust_payment_terms}</TableCell>
                      <TableCell align="right">{n.business_area}</TableCell>
                      <TableCell align="right">{n.ship_date}</TableCell>
                      <TableCell align="right">{n.ship_to}</TableCell>
                      <TableCell align="right">{n.clearing_date}</TableCell>
                      <TableCell align="right">{n.clearing_date_norm}</TableCell>
                      <TableCell align="right">{n.reason_code}</TableCell>
                      <TableCell align="right">{n.isOpen}</TableCell>
                      <TableCell align="right">{n.discount_due_date_norm}</TableCell>
                      <TableCell align="right">{n.debit_credit_indicator}</TableCell>
                      <TableCell align="right">{n.payment_method}</TableCell>
                      <TableCell align="right">{n.document_creation_date}</TableCell>
                      <TableCell align="right">{n.invoice_amount_doc_currency}</TableCell>
                      <TableCell align="right">{n.document_id}</TableCell>
                      <TableCell align="right">{n.actual_open_amount}</TableCell>
                      <TableCell align="right">{n.paid_amount}</TableCell>
                      <TableCell align="right">{n.dayspast_due}</TableCell>
                      <TableCell align="right">{n.invoice_age}</TableCell>
                      <TableCell align="right">{n.disputed_amount}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          className = {classes.pagination}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={posts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);