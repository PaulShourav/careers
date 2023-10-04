


const SelectMultiTnput = ({ selectValue, setSelectValue, placeholder ,fieldName}) => {


    const handleKeyPress = (event) => {

        if (event.key === 'Enter') {

            const randomNumber = Math.floor(Math.random() * (1000 - 1) + 1)
            const data = {
                _id: randomNumber,
                value: event.target.value
            }
            setSelectValue(data)
            const inputData = [...selectValue]
            inputData.push(data)
            setSelectValue(inputData);
            event.target.value = ''

        }
    };
    const handleDeleteSelectedField = (id) => {
        console.log(id);

        const updateData = selectValue?.filter(element => element._id !== id)
        setSelectValue(updateData);
    }

    return (
        <>
            <div className="border border-indigo-600 rounded-md p-3">
                <ul className=" flex flex-wrap gap-3 ">
                    {selectValue?.map((element, index) => <li key={index + 1} className="bg-gray-200 rounded-md ">{element.value} <span id="myButton" className="btn btn-sm" onClick={() => handleDeleteSelectedField(element._id)} >x</span></li>)}
                </ul>

                <textarea
                    type="text"
                    placeholder={placeholder || 'Enter input and press enter key'}
                    onKeyDown={handleKeyPress}
                    className="w-full border-none focus:outline-none rounded-md "
                />








            </div>
        </>
    );
};

export default SelectMultiTnput;