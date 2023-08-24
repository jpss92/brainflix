import './upload.scss';
import Navigation from '../navigation/navigation';
import uploadImg from '../../assets/Images/Upload-video-preview.jpg';
import uploadIcon from '../../assets/Icons/publish.svg';
import Button from '../button/button';


function Upload() {
    return(
        <>
        <Navigation />
        <div className='upload'>
            <h1 className='upload__title'>Upload Video</h1>
            <div className='upload__label'>VIDEO THUMBNAIL</div>
            <img className="upload__img"src={uploadImg} alt='upload' />
            <div className='upload__input'>
                <label className='upload__label'>TITLE YOUR VIDEO</label>
                <input placeholder='Add a title to your video'></input>
            </div>
            <div className='upload__input'>
                <label className='upload__label'>ADD A VIDEO DESCRIPTION</label>
                <textarea placeholder='Add a description to your video'></textarea>
            </div>
            <Button src={uploadIcon}>Publish</Button>
            <div className='upload__cancel'>CANCEL</div>
        </div>
        </>
    )
};

export default Upload;