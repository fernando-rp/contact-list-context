import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ViewUsers = () => {
    const { store } = useContext(Context);
    const { users } = store;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card my-5">
                            <div className="card-header">
                                <h2 className="card-title">
                                    Listado de Contactos
                                </h2>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Apellido</th>
                                            <th scope="col">Telefono</th>
                                            <th scope="col" style={{ width: '5%' }} colSpan="2">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            !!users &&
                                            users.length > 0 &&
                                            users.map((user, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{user.id}</th>
                                                        <td>{user.name}</td>
                                                        <td>{user.lastname}</td>
                                                        <td>{user.phone}</td>
                                                        <td>
                                                            <Link to={`/${user.id}/edit`} className="btn btn-info btn-sm">
                                                                <i className="fa fa-edit"></i>
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <Link to="" className="btn btn-danger btn-sm">
                                                                <i className="fa fa-trash"></i>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }



                                        {/* <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>
                                                <Link to={`/${1}/edit`} className="btn btn-info btn-sm">
                                                    <i className="fa fa-edit"></i>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to="" className="btn btn-danger btn-sm">
                                                    <i className="fa fa-trash"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>
                                                <Link to={`/${2}/edit`} className="btn btn-info btn-sm">
                                                    <i className="fa fa-edit"></i>
                                                </Link>
                                            </td>
                                            <td>
                                                <a href="" className="btn btn-danger btn-sm">
                                                    <i className="fa fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                            <td>
                                                <Link to={`/${3}/edit`} className="btn btn-info btn-sm">
                                                    <i className="fa fa-edit"></i>
                                                </Link>
                                            </td>
                                            <td>
                                                <a href="" className="btn btn-danger btn-sm">
                                                    <i className="fa fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewUsers;