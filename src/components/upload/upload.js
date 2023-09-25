import './upload.scss';
import uploadImg from '../../assets/Images/Upload-video-preview.jpg';
import uploadIcon from '../../assets/Icons/publish.svg';
import Button from '../button/button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';


function Upload() {

    const api = "http://localhost:8080";
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    function generateVideoId() {
        const newVideoId = Math.floor(Math.random() * 10000);
        return `${newVideoId}`;}

        const handlePublish = (e) => {
        e.preventDefault();

        const randomId = generateVideoId('video'); 
        const uploadedVideoId = Math.floor(Math.random() * 1000);
        const id = uploadedVideoId;
        const publishData = { 
            id,
            title,
            description,
        }

        axios
            .post(api + '/videos', publishData) 
            .then(res => {console.log("Upload successfully publihsed")
            navigate('/');
            })
            .catch(error => {
            console.error("Error uploading:", error);
        });
    };
        
    return(
        <div className='upload'>
            <h1 className='upload__title'>Upload Video</h1>
            <div className='upload__label'>VIDEO THUMBNAIL</div>
            <img className="upload__img"src={uploadImg} alt='upload' />
            <form onSubmit={handlePublish}>
                <div className='upload__input'>
                    <label className='upload__label'>TITLE YOUR VIDEO</label>
                    <input id="upload__title"
                        placeholder='Add a title to your video'
                        onChange={(e) => setTitle(e.target.value)}>
                    </input>
                </div>
                <div className='upload__input'>
                    <label className='upload__label'>ADD A VIDEO DESCRIPTION</label>
                    <textarea 
                        id="upload__descrption"
                        placeholder='Add a description to your video'
                        onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                </div>
                <Button src={uploadIcon} type="submit">Publish</Button>
                <div className='upload__cancel'>CANCEL</div>
            </form>
        </div>
    );
};
export default Upload;