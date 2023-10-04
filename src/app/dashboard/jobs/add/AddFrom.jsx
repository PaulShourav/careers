"use client"
import flatpickr from "flatpickr";
import { useEffect, useRef, useState } from "react";
import 'flatpickr/dist/flatpickr.min.css';
import TextEditor from "@/components/TextEditor";
import { useForm } from "react-hook-form";
import SelectMultiTnput from "@/components/SelectMultiTnput";
import slugGenerate from "@/utilis/slugGenerate";
import toast from "react-hot-toast";


const AddFrom = () => {

    const publishedOnPickerRef = useRef(null);
    const deadlinePickerRef = useRef(null);
    const [longTitle, setLongTitle] = useState(null)
    const [uniqueTitleCheck, setUniqueTitleCheck] = useState('')
    const [jobResponsibilities, setJobResponsibilities] = useState([])
    const [customRequiredError, setCustomRequiredError] = useState('')
    const [educationalRequirements, setEducationalRequirements] = useState([]);
    const [experienceRequirements, setExperienceRequirements] = useState([]);
    const { register, handleSubmit, control, reset, setError, formState: { errors } } = useForm();

    useEffect(() => {
        flatpickr(publishedOnPickerRef.current, {
            // Flatpickr options for the start date picker
            theme: 'airbnb',
            dateFormat: "d-M-Y",
        });

        flatpickr(deadlinePickerRef.current, {
            // Flatpickr options for the end date picker
            dateFormat: "d-M-Y",
        });
    }, []);


    console.log('longtile', longTitle);
    // console.log('piblished', publishedOnPickerRef.current.value);
    const handleAddJob = (data) => {
        console.log('paici');
      
        //Custom error handle
        if (longTitle === '' || publishedOnPickerRef.current ===null || deadlinePickerRef.current ===null|| jobResponsibilities.length == 0 || educationalRequirements.length == 0 || experienceRequirements.length == 0) { return setCustomRequiredError('Field in required.') }

        const publishedOn = publishedOnPickerRef.current.value
        const deadline = deadlinePickerRef.current.value
        const slug = slugGenerate(data.title)
        const newData = { ...data, slug, publishedOn, deadline, longTitle, jobResponsibilities, educationalRequirements, experienceRequirements }
        console.log(newData);
        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.titleError) {
                    setUniqueTitleCheck(data.titleError)
                } else {

                }
                toast.success(data.message)
                console.log(data)
            })
    }
    return (
        <form onSubmit={handleSubmit(handleAddJob)}>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="w-full md:basis-1/2">
                    <div className=" form-control w-full">
                        <label className="my-1">Job Tilte:<span className="text-red-800">*</span></label>
                        <input type="text" placeholder="Type here" {...register("title", { required: true })} className="input input-bordered input-primary  w-full " />
                        {errors.title?.type === "required" && (
                            <p className="text-red-400">Job title field is required</p>
                        )}
                        {uniqueTitleCheck !== '' && (
                            <p className="text-red-400">{uniqueTitleCheck}</p>
                        )}
                    </div>
                </div>
                <div className="w-full md:basis-1/4">
                    <div className="form-control w-full">
                        <label className="my-1">Vacancy:<span className="text-red-800">*</span></label>
                        <input type="text" placeholder="Type here" {...register("vacancy", { required: true })} className="input input-bordered input-primary  w-full " />
                        {errors.vacancy?.type === "required" && (
                            <p className="text-red-400">Vacancy is required</p>
                        )}
                    </div>
                </div>
                <div className="w-full md:basis-1/4">
                    <div className="form-control w-full">
                        <label className="my-1">Job Type:<span className="text-red-800">*</span></label>
                        <input type="text" placeholder="Type here" {...register("jobType", { required: true })} className="input input-bordered input-primary  w-full " />
                        {errors.jobType?.type === "required" && (
                            <p className="text-red-400">Job type is required</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="form-control w-full">
                <label className="my-1">Long Tilte:<span className="text-red-800">*</span></label>
                <TextEditor content={longTitle} setContent={setLongTitle} />
                {longTitle == '' && customRequiredError !== '' ? (
                    <p className="text-red-400">{customRequiredError}</p>
                ) : ''}
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="form-control w-full md:basis-1/5">
                    <label className="my-1">Salary:<span className="text-red-800">*</span></label>
                    <input type="text" placeholder="Type here" {...register("salary", { required: true })} className="input input-bordered input-primary  w-full " />
                    {errors.salary?.type === "required" && (
                        <p className="text-red-400">Salary is required</p>
                    )}
                </div>
                <div className="form-control w-full md:basis-2/5">
                    <label className="my-1">Location</label>
                    <input type="text" placeholder="Type here" {...register("location", { required: true })} className="input input-bordered input-primary  w-full " />
                    {errors.location?.type === "required" && (
                        <p className="text-red-400">Location is required</p>
                    )}
                </div>
                <div className="form-control w-full md:basis-1/5">
                    <label className="my-1">Published on:<span className="text-red-800">*</span></label>
                    <input ref={publishedOnPickerRef} type="text" placeholder="Type here" className="input input-bordered input-primary  w-full " />
                    {publishedOnPickerRef.current ===null && (
                        <p className="text-red-400">{customRequiredError}</p>
                    )}
                </div>
                <div className="form-control w-full md:basis-1/5">
                    <label className="my-1">Deadline:<span className="text-red-800">*</span></label>
                    <input ref={deadlinePickerRef} type="text" placeholder="Type here" className="input input-bordered input-primary  w-full " />
                    {deadlinePickerRef.current ===null && customRequiredError !== '' ? (
                        <p className="text-red-400">{customRequiredError}</p>
                    ) : ''}
                </div>

            </div>
            <div className="form-control w-full">
                <label className="my-1">Job responsibilities and requirements:</label>
                <SelectMultiTnput selectValue={jobResponsibilities} setSelectValue={setJobResponsibilities}  />
                {jobResponsibilities.length == 0 && customRequiredError !== '' ? (
                    <p className="text-red-400">{customRequiredError}</p>
                ) : ''}

            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="form-control w-full">
                    <label className="my-1">Educational requirements:</label>
                    <SelectMultiTnput selectValue={educationalRequirements} setSelectValue={setEducationalRequirements} />
                    {educationalRequirements.length == 0 && customRequiredError !== '' ? (
                        <p className="text-red-400">{customRequiredError}</p>
                    ) : ""}
                </div>

                <div className="form-control w-full">
                    <label className="my-1">Experience requirements:</label>
                    <SelectMultiTnput selectValue={experienceRequirements} setSelectValue={setExperienceRequirements} />
                    {experienceRequirements.length == 0 && customRequiredError !== '' ? (
                        <p className="text-red-400">{customRequiredError}</p>
                    ) : ''}
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-5">Submit</button>
        </form>
    );
};

export default AddFrom;