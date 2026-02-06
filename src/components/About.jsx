import { Paper } from '@mui/material';
import '../styles/styles.css';
const About = () => {
    return (
        <>
            <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
                <Paper elevation={3} sx={{ width: '10rem', height: '10rem', marginBottom: '20px', overflow: 'hidden', borderRadius: '100%', objectFit: 'cover' }}>
                    <img src="https://media.licdn.com/dms/image/v2/D4E03AQE6LqLdk7or6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696963118442?e=1772064000&v=beta&t=YFFnrIZPPpkoYB6XkXZh60yOdoTE6WrtuUgjBVDjnxQ" alt="A photo of Gabe" className='profile-border' />
                </Paper>
                <h2>About Me</h2>
                <h2>Gabriel Jimenez</h2>
                <p>Simple software engineer having fun building cool little things. Always striving to learn new tech and new ways to solve problems. I have a Bachelor's of Science degree in Software Engineering from Kennesaw State University, GA. My enthusiasm for tech started when my dad got me my first game console: the SEGA Dreamcast and subsequently when we got our first family home computer. I remember the days where I needed the help of my parents to run a .exec from the home computer's command console!</p>
                <p>In high school, I learned my first programming langauge which was C++. I remember building a small blackjack game with it that was fueled with nothing but if-else statements. No clue how I managed to pull that off. In college, I learned Java, C#, SQL, and a bit of Unreal Engine's Blueprints programming for a VR senior project. I landed a small dev job and from there I picked up just enough HTML, JavaScript (mostly jQuery), and KnockoutJS to get stuff done.</p>
                <p>Today, I got proper training on HTML, CSS, and JavaScript and completed training on the MERN tech stack and looking to apply what I know to solve real world and provide business solutions.</p>
                <p>Aside from the dev stuff, I play the piano, volunteer at my local food distribution center, and like to raid with the lads in Guild Wars 2 on weekends.</p>
            </Paper>
        </>
    )
}

export default About;