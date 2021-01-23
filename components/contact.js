export default function Contact() {
    return (
        <div id="contact" className="h-full pt-16">
            <h2> Contact </h2>
            <div className="flex justify-between">
                <p className="w-1/2 px-2">
                    Send me a message to <a className="" id="profile-link" target="_blank" rel="noopener"
                        href="mailto:angelakgo20@gmail.com">angelakgo2@gmail.com </a>
                if my profile matches what you are looking for,
                either as a developer or as a helping hand.
                Feel free to contact me even if just want to say hi!
            </p>
                <div className="w-1/2 px-2 flex justify-around">
                    <a id="profile-link" target="_blank" rel="noopener" href="https://codepen.io/angela-goncalves">
                        <img className="w-10" src="svg/codepenicon.svg" />
                    </a>
                    <a id="profile-link" target="_blank" rel="noopener" href="https://github.com/angela-goncalves">
                        <img className="w-10" src="svg/github.svg" />
                    </a>
                    <a id="profile-link" target="_blank" rel="noopener" href="https://www.linkedin.com/in/angela-goncalves-6009a518a/">
                        <img className="w-10" src="svg/linkedin.svg" />
                    </a>
                </div>
            </div>
        </div>
    )
}