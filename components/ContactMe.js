export default function Contact() {
  return (
    <div className="flex flex-col py-16 px-6 items-center ">
      <h2 className="font-subtitle text-2xl lg:text-3xl text-subtitle pb-6">
        Contact
      </h2>
      <p className="text-justify w-full max-w-xl">
        You could send me a message to either as if you are looking a developer,
        to comment something about what see here, or even if just want to say
        hi!
      </p>
      <div className="py-4 flex justify-between space-x-6 mt-10">
        <a target="_blank" rel="noopener" href="mailto:angelakgo20@gmail.com">
          <img className="w-16" src="../svg/envelope.svg" alt="e-mail icon" />
        </a>
        <a
          id="profile-link"
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/angela-goncalves-6009a518a/"
        >
          <img className="w-16" alt="linkedin icon" src="svg/linkedin.svg" />
        </a>
      </div>
    </div>
  );
}
