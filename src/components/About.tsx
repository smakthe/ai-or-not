import '../styles/about.css'

const About: React.FC = () => {
    return (
        <div className="about">
            <h1 className="about-heading">About AI or Not</h1>
            <p className="about-description">
                This game tests your skill of recognizing whether you can correctly identify<br/>
                if an image is produced by generative AI or not by putting two images sideby-side<br/>
                and letting you guess the image which is NOT an AI generated one!
            </p>
            <p className="about-thanks">
                Thank you for playing AI or Not! Hope you enjoy the experience!<br/>
                For more information about me click <a href="https://somak-resume.vercel.app" target="blank">here</a>
            </p>
        </div>
    );
}
export default About