import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
import { connect } from 'react-redux';


const Directory = ({ sections }) => (
  <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-2">
    {
      sections.map(({ id, ...otherComponent }) => (
        <MenuItem key={id} {...otherComponent} />
      ))
    }
  </div>
)


const mapStateToProps = state => ({
  sections: state.directory
})

export default connect(mapStateToProps)(Directory)