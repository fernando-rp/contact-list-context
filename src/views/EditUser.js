import { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Context } from "../store/appContext";

const EditUser = () => {
    const { store: { user }, actions } = useContext(Context);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        actions.getUserById("http://localhost:3001/users", id)
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            actions.updateUser("http://localhost:3001/users", id)
                        }}>
                            <div className="card my-5">
                                <div className="card-header">
                                    <h2 className="card-title">
                                        Editar Usuario ({id})
                                </h2>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Nombre</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Ingresar Nombre"
                                                    className="form-control mb-3"
                                                    value={!!user && user.name}
                                                    onChange={actions.handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Apellido</label>
                                                <input
                                                    type="text"
                                                    id="lastname"
                                                    name="lastname"
                                                    placeholder="Ingresar Apellido"
                                                    className="form-control mb-3"
                                                    value={!!user && user.lastname}
                                                    onChange={actions.handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="name">Telefono</label>
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Ingresar Telefono"
                                                    className="form-control mb-3"
                                                    value={!!user && user.phone}
                                                    onChange={actions.handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    <button className="btn btn-success mx-1">Guardar</button>
                                    <button className="btn btn-warning mx-1" onClick={() => history.push('/')}>Regresar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditUser;