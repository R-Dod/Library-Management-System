import React, { Component } from 'react'
import Form from '../../components/Form'
import styles from '../../components/form.module.css'

class Member extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>Add Member</h1>
                <Form />
            </div>
        )
    }
}

export default Member