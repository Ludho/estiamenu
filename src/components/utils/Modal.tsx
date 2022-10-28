interface Props {
    id?: string;
    title? : String;
    callback? : Function;
    children?: React.ReactNode;
    show?: boolean;
}

function Modal({id,title,callback,children,show}:Props) {
    return ( 
<>

<div className="modal show" id={id} >
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{title?title:"Default Titile"}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {children}
      <p>ffffff</p>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={callback?()=>callback():()=>{}}>Enregistrer</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>

</>
     );
}

export default Modal;