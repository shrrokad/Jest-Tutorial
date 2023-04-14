import React from 'react';
import Bgimg from '../assets/photo-1519681393784-d120267933ba.avif';

const Application = () => {
    return (
        <>
            <h1>Job Appliction from</h1>
            <h2>Section 1</h2>
            <p>All fields are mandatory</p>
            <span title={'close'}>x</span>
            <img src={Bgimg} alt="Image" width={'150px'} height={'150px'} />
            <div data-testid='custom-element'>Custom HTML element</div>
            <form>
                <div>
                    <label htmlFor={"name"}>Name</label>
                    <input type="text" id={"name"} placeholder={'Please Enter Your Name'} value={'Shruti'} onChange={() => {}} />
                </div>
                <div>
                    <label htmlFor={"bio"}>BioDescription</label>
                    <textarea id="bio" name={"bio"} />
                </div>
                <div>
                    <label htmlFor={"job-location"}>Job Location</label>
                    <select id="job-location">
                        <option value="">Select a Country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id={'terms'}/> I agree to the terms and conditions
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
};

export default Application;