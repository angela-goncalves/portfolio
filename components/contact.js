export default function Contact() {
    return (
        <div id="contact" className="h-full w-full py-14 flex ">
            <div className="flex flex-col sm:w-1/2">
                <h2 className="p-4 font-subtitle text-2xl text-subtitle"> Contact </h2>
                <p className="p-4 text-justify">
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
        </div>
    )
}