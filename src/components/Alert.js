function Alert(props) {

    switch (props.isValid) {

        case null:
                return (
                    <div className="spinner-border" role="status">
                         <span className="visually-hidden">Loading...</span>
                    </div>
                )
            break;

        case true:
                return (
                    <div className="alert alert-success" role="alert">
                        La cédula introducida es valida. 
                    </div>  
                )
            break;

        case false:
                return (
                    <div className="alert alert-danger" role="alert">
                        La cédula introducida no es valida. 
                    </div>
                )
            break;
    
        default:
               
            break;
    }
  
}

export default Alert;
