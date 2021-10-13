import Image from "next/image";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col mt-60 pt-10">
      <div className="w-full max-w-4xl ml-40">
        <h2 className="text-2xl md:text-5xl font-medium text-darkPurple">
          Contact
        </h2>
        <p className="text-base md:text-2xl text-justify my-14">
          You could send me a message to either as if you are looking a
          developer, to comment something about what see here, or even if just
          want to say hi!
        </p>
        <p className="text-base md:text-2xl text-justify my-14">
          Feel free to send me an email me any time.
        </p>
      </div>
      <div className="w-full flex flex-row justify-evenly">
        <div className="bg-pink md:p-11 rounded-2xl w-full max-w-lg">
          <h3 className="font-medium text-center text-darkPurple text-lg md:text-2xl mb-11">
            Send an email!
          </h3>
          <form className="flex flex-col space-y-5">
            <input
              className="text-sm md:text-xl border-2 rounded-xl border-darkPurple p-2 focus:outline-none bg-transparent"
              placeholder="Name"
            />
            <input
              className="text-sm md:text-xl border-2 rounded-xl border-darkPurple p-2 focus:outline-none bg-transparent"
              placeholder="E-mail"
            />
            <input
              className="text-sm md:text-xl border-2 rounded-xl border-darkPurple p-2 focus:outline-none bg-transparent"
              placeholder="Subject"
            />
            <textarea
              className="h-40 text-sm md:text-xl border-2 rounded-xl border-darkPurple p-2 focus:outline-none bg-transparent"
              placeholder="Write what would you like to tell me"
            />
          </form>
        </div>
        <Image
          alt="basement-supply"
          width={500}
          height={500}
          src="/svg/contact.svg"
        />
      </div>
    </div>
  );
}
