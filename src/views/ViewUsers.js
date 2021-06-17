import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ViewUsers = () => {
    const { store, actions } = useContext(Context);
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
                                                            <Link to="" className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delete">
                                                                <i className="fa fa-trash" ></i>
                                                            </Link>

                                                            {/* onClick={()=>{actions.handleUsers(user.id,index)}} */}
                                                            

                                                            <div className="modal fade" id="delete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                        ¿Estás seguro que quieres eliminar el contacto?
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>{actions.handleUsers(user.id,index)}}>Eliminar</button>
                                                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancelar</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer d-flex justify-content-end">
                                <Link to="/newuser" className="btn btn-success btn-sm">
                                    Agregar Contacto
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewUsers;