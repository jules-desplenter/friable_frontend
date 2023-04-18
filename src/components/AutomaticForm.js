import React, { useEffect, useMemo } from 'react'

const AutomaticForm = ({
    fields,
    handleChange,
    formData,
    otherValues,
    setOtherValues,
}) => {
    const refs = useMemo(
        () =>
            Array(fields.length)
                .fill(0)
                .map((i) => React.createRef()),
        [fields.length],
    )

    useEffect(() => {
        console.log('jopei')
        for (let i in fields) {
            if (fields[i].type === 'checkBox') {
                if (otherValues[i] === '' || otherValues[i] === undefined) {
                    const newOtherValues = [...otherValues]
                    newOtherValues[i] = fields[i].checkedItems.filter(
                        (item) => !fields[i].options.includes(item),
                    )
                    setOtherValues(newOtherValues)
                }
            }
        }
    }, [otherValues, fields, setOtherValues])

    const handleCheckboxChange = (event, checkedItems, setCheckedItems) => {
        const { value } = event.target
        const isChecked = event.target.checked

        if (isChecked) {
            setCheckedItems([...checkedItems, value])
        } else {
            setCheckedItems(checkedItems.filter((item) => item !== value))
        }
    }

    const handleOtherChange = (e, checkedItems, setCheckedItems) => {
        const value = e.target.value
        if (value !== '') {
            // add the value to the checkedItems array if it's not empty
            setCheckedItems([...checkedItems, value])
        } else {
            // remove the value from the checkedItems array if it's empty
            setCheckedItems(checkedItems.filter((item) => item !== value))
        }
    }

    const handleOtherChangeRadio = (e, checkedItems, setCheckedItems) => {
        const value = e.target.value
        if (value !== '') {
            // add the value to the checkedItems array if it's not empty
            setCheckedItems(value)
        }
    }

    const handleRadioChange = (event, checkedItems, setCheckedItems, index) => {
        console.log(index)
        refs[index].current.value = ''
        setCheckedItems(event.target.value)
    }

    return (
        <div className="w-full flex justify-center">
            <form className="w-1/2" onSubmit={(e) => e.preventDefault()}>
                {fields.map((field, index_big) => (
                    <div
                        key={field.name}
                        className="flex flex-col justify-start"
                    >
                        {field.type === 'checkBox' ? (
                            <>
                                <p className="text-left font-bold mt-6">
                                    {field.name}
                                </p>
                                <div className="flex flex-row flex-wrap">
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
                                                className="ml-2"
                                            />
                                            {item}
                                        </label>
                                    ))}
                                </div>
                                <input
                                    className="bg-background border border-blackCustom pl-2 rounded text-blackCustom placeholder-gray-700 mt-2"
                                    ref={refs[index_big]}
                                    type="text"
                                    placeholder="other"
                                    value={otherValues[index_big]}
                                    onkeydown={(e) => {
                                        if (
                                            e.key === 'Backspace' ||
                                            e.key === 'Delete'
                                        ) {
                                            e.preventDefault()
                                        }
                                    }}
                                    onChange={(e) => {
                                        const newCheckedItems = fields[
                                            index_big
                                        ].checkedItems.filter((item) =>
                                            fields[index_big].options.includes(
                                                item,
                                            ),
                                        )
                                        field.setCheckedItems(newCheckedItems)
                                        if (e.target.value !== '') {
                                            const newOtherValues = [
                                                ...otherValues,
                                            ]
                                            newOtherValues[index_big] =
                                                e.target.value
                                            setOtherValues(newOtherValues)
                                        } else {
                                            const newOtherValues = [
                                                ...otherValues,
                                            ]
                                            newOtherValues[index_big] = ''
                                            setOtherValues(newOtherValues)
                                        }
                                    }}
                                    onBlur={(e) =>
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
                                <p className="text-left font-bold mt-6">
                                    {field.name}
                                </p>
                                <div className="flex flex-row flex-wrap">
                                    {field.options.map((item, index) => (
                                        <label>
                                            <input
                                                className="ml-2"
                                                input
                                                type="radio"
                                                id={`checkbox-${index}`}
                                                name={field.name}
                                                value={item}
                                                checked={
                                                    field.checkedItems !== ''
                                                        ? field.checkedItems ===
                                                          item
                                                        : field.refresh === item
                                                }
                                                onChange={(e) =>
                                                    handleRadioChange(
                                                        e,
                                                        field.checkedItems,
                                                        field.setCheckedItems,
                                                        index_big,
                                                    )
                                                }
                                            />
                                            {item}
                                        </label>
                                    ))}
                                </div>
                                <input
                                    className="bg-background border border-blackCustom pl-2 rounded text-blackCustom placeholder-gray-700 mt-2"
                                    ref={refs[index_big]}
                                    type="text"
                                    placeholder="other"
                                    value={
                                        field.options.includes(
                                            field.checkedItems,
                                        )
                                            ? ''
                                            : field.checkedItems
                                    }
                                    onChange={(e) =>
                                        handleOtherChangeRadio(
                                            e,
                                            field.checkedItems,
                                            field.setCheckedItems,
                                        )
                                    }
                                />
                            </>
                        ) : field.type === 'textBox' ? (
                            <>
                                <label
                                    className="text-start font-bold mt-6"
                                    htmlFor={field.name}
                                >
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
                                <label
                                    className="text-start font-bold mt-6"
                                    htmlFor={field.name}
                                >
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
        </div>
    )
}

export default AutomaticForm
