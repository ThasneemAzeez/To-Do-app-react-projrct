import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const fechDataTodo = () => {
        axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        ).then((response) => {
            console.log(response.data)
            changeData(response.data)
        })
            .catch().finally()
    }
    useEffect(()=>{fechDataTodo()},[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <table class="table">


                                <thead>
                                    <tr>
                                        <th scope="col">userid</th>
                                        <th scope="col">id</th>
                                        <th scope="col">title</th>
                                        <th scope="col">completed</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>




                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll