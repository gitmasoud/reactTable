import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
//import '../css/Table.css'
//import '../dist/react-bootstrap-table-all.min.css'
 
 
function rowClassNameFormat(row, rowIdx) {
  // row is whole row object
  // rowIdx is index of row
  console.log(row)
  return row['name'] === 'George Michael' ? 
    'GeorgeMichael-Row' : 'Other-Row';
}
 
 
class Table3 extends Component {
  render() {
    return (
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <BootstrapTable  data={this.props.data} 
                        trClassName={rowClassNameFormat}
        >
          <TableHeaderColumn isKey dataField='id'
          >
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'
          >
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
          >
            Value
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}
 
export default Table3