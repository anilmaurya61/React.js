import React from 'react'

export default function Alert(props) {
  return (
    props.Alert && <div>
         <div className="alert alert-success" role="alert">
           <strong>{props.Alert.type}:</strong> {props.Alert.msg}
        </div>
    </div>
  )
}
