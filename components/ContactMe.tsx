import Image from "next/image";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col mt-60 pt-10">
      <h2 className="text-2xl md:text-5xl font-medium text-darkPurple">
        Contact
      </h2>
      <div className="flex flex-row space-x-32 items-center">
        <Image
          alt="basement-supply"
          width={500}
          height={500}
          src="/svg/contact.svg"
        />
        <div className="w-full max-w-3xl">
          <p className="text-base md:text-2xl text-justify my-4 md:my-14">
            You can{" "}
            <a
              href="mailto: angelakgo20@gmail.com"
              className="text-darkPink underline hover:no-underline"
            >
              send me a message
            </a>{" "}
            if you are looking a React developer, to comment something about
            what see here, or even if just want to say hi!
          </p>
          <p className="text-base md:text-2xl text-justify my-4 md:my-14">
            Feel free to send me an email me any time.
          </p>
        </div>
      </div>
    </div>
  );
}
