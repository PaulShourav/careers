


const Model = ({ children,modalId,modelTitle }) => {

    return (
        <>
        <input type="checkbox" id={modalId} className="modal-toggle" />
        <div className="modal  sm:modal-middle">
          <div className="modal-box w-11/12 md:max-w-5xl">
            <div className=" border-b border-indigo-700 mb-3">
            <p className="font-bold text-lg md:text-xl uppercase mb-2">{modelTitle}</p>
            </div>
          <label htmlFor={modalId} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</label>
            {children}
           
          </div>
        </div>
        </>
    );
};

export default Model;