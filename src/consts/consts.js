import gh from '../assets/contact/github.png';
import linkedin from '../assets/contact/linkedin.png';
import mail from '../assets/contact/mail.png';

export const EMPLOYMENT_TYPES = {
    REMOTE: 'Remote',
    FREELANCE: 'Freelance',
    CONTRACTOR: 'Contractor',
    FULL_TIME: 'Full Time'
}

export const contactInfo = [
    {
        icon: mail,
        text: 'Send an email',
        link: 'mailto:nedimco.dev@gmail.com'
    },
    {
        icon: linkedin,
        text: 'Linkedin',
        link: 'https://www.linkedin.com/in/nedimcolak'
    },
    {
        icon: gh,
        text: 'Github',
        link: 'https://www.github.com/nedimcolak'
    },
]