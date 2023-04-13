import React from 'react'

const AutomaticForm = ({ fields, handleChange, formData }) => {
    const handleCheckboxChange = (event, checkedItems, setCheckedItems) => {
        const { value } = event.target
        const isChecked = event.target.checked

        if (isChecked) {
            setCheckedItems([...checkedItems, value])
        } else {
            setCheckedItems(checkedItems.filter((item) => item !== value))
        }
    }

    const handleOtherChange = (event, checkedItems, setCheckedItems) => {
        const { value } = event.target
        console.log(value)
    }

    const handleRadioChange = (event, checkedItems, setCheckedItems) => {
        console.log('what')
        setCheckedItems(event.target.value)
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {fields.map((field) => (
                <div key={field.name} className="flex flex-col justify-start">
                    {field.type === 'checkBox' ? (
                        <>
                            <p>{field.name}</p>
                            {field.options.map((item, index) => (
                                <label>
                                    <input
                                        input
                                        type="checkbox"
                                        id={`checkbox-${index}`}
                                        name={item}
                                        value={item}
                                        checked={field.checkedItems.includes(
                                            item,
                                        )}
                                        onChange={(e) =>
                                            handleCheckboxChange(
                                                e,
                                                field.checkedItems,
                                                field.setCheckedItems,
                                            )
                                        }
                                    />
                                    {item}
                                </label>
                            ))}
                            <input
                                type="text"
                                placeholder="other"
                                onChange={(e) =>
                                    handleOtherChange(
                                        e,
                                        field.checkedItems,
                                        field.setCheckedItems,
                                    )
                                }
                            />
                        </>
                    ) : field.type === 'radio' ? (
                        <>
                            <p>{field.name}</p>
                            {field.options.map((item, index) => (
                                <label>
                                    <input
                                        input
                                        type="radio"
                                        id={`checkbox-${index}`}
                                        name={field.name}
                                        value={item}
                                        checked={
                                            field.checkedItems !== ''
                                                ? field.checkedItems === item
                                                : field.refresh === item
                                        }
                                        onChange={(e) =>
                                            handleRadioChange(
                                                e,
                                                field.checkedItems,
                                                field.setCheckedItems,
                                            )
                                        }
                                    />
                                    {item}
                                </label>
                            ))}
                            <input
                                type="text"
                                placeholder="other"
                                onChange={(e) =>
                                    handleOtherChange(
                                        e,
                                        field.checkedItems,
                                        field.setCheckedItems,
                                    )
                                }
                            />
                        </>
                    ) : field.type === 'textBox' ? (
                        <>
                            <label className="text-start" htmlFor={field.name}>
                                {field.label}
                            </label>
                            <textarea
                                type={field.type}
                                name={field.name}
                                placeholder={field.name}
                                id={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                                className="bg-background border border-blackCustom pl-2 rounded text-blackCustom placeholder-gray-700"
                            />
                        </>
                    ) : (
                        <>
                            <label className="text-start" htmlFor={field.name}>
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                name={field.name}
                                placeholder={field.name}
                                id={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                                className="bg-background border border-blackCustom pl-2 rounded text-blackCustom placeholder-gray-700"
                            />
                        </>
                    )}
                </div>
            ))}
        </form>
    )
}

export default AutomaticForm
