import React, { useState } from 'react'

const DynamicForm = ({ fields, handleSubmit }) => {
    const [formData, setFormData] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    return (
        <form onSubmit={(e) => handleSubmit(e, formData)}>
            {fields.map((field) => (
                <div key={field.name} className="flex flex-col justify-start">
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
                </div>
            ))}
            <button
                type="submit"
                className="bg-greenCustom px-2 rounded-2xl mt-5"
            >
                Submit
            </button>
        </form>
    )
}

export default DynamicForm
