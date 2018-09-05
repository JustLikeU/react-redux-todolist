import React from 'react'
import { Button, List, Input } from 'antd'
import { connect } from 'react-redux'
// import store from './store'

import 'antd/lib/button/style/css'
import 'antd/lib/list/style/css'
import 'antd/lib/input/style/css'

const Todo = (props) => {
  const { inputValue, list, handleChange, handleAdd, handleDelete } = props
  return (
    <div className='todo'>
      <div className='hd'>
        <Input placeholder='todo' value={inputValue} onChange={handleChange} />
        <Button type='primary' onClick={handleAdd}>Add</Button>
      </div>
      <List
        bordered
        dataSource={list}
        renderItem={(item, index) => (<List.Item onClick={handleDelete.bind(this, index)}>{item}</List.Item>)}
      />
    </div>
  )
}

// store的数据映射给props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value,
      }
      dispatch(action)
    },
    handleAdd() {
      const action = {
        type: 'add_item'
      }
      dispatch(action)
    },
    handleDelete(index) {
      const action = {
        type: 'delete_item',
        value: index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
