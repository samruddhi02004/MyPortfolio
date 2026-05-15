import { GITHUB_URL, LINKEDIN_URL } from "./socialUrls.js";

export const contactInfo = {
 email: "gaikwadsamruddhi97@gmail.com",
  location: "Pune, India",
  availability: "Open to software engineering opportunities",
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL
};

export const contactContent = {
  title: "Let's Connect",
  subtitle: "Building innovative solutions through collaboration",
  description: "I'm actively seeking software engineering opportunities where I can apply my AI/ML and full-stack development expertise. Let's discuss how I can contribute to your team's success."
};

export const contactFormFields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
    required: true
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "john.doe@company.com",
    required: true
  },
  {
    // Subject field removed
    type: "text",
    placeholder: "Software Engineering Opportunity",
    required: true
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Tell me about your project or opportunity...",
    required: true
  }
];
