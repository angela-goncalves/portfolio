export default function Contact() {
    return (
        <div id="contact" className="h-full mt-16 mb-24 flex flex-col">
            <h2 className="p-4"> Contact </h2>
            <p className="p-4 sm:w-1/2 text-justify">
                You could send me a message to either as if you are looking a developer, to comment something about what see here, or even if just want to say hi!
            </p>
            <div className="py-4 flex justify-around">
                <a id="profile-link" target="_blank" rel="noopener" href="#">
                    <img className="w-16" src="../svg/twitter.svg" alt="twitter icon" />
                </a>
                <a id="profile-link" target="_blank" rel="noopener" href="mailto:angelakgo20@gmail.com">
                    <img className="w-16" src="../svg/envelope.svg" alt="e-mail" />
                </a>
                <a id="profile-link" target="_blank" rel="noopener" href="https://www.linkedin.com/in/angela-goncalves-6009a518a/">
                    <img className="w-16" src="svg/linkedin.svg" />
                </a>
            </div>
        </div>
    )
}