import { SelectedPage } from "../shared/types";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Htext from "../shared/Htext";
import ContactUsPageGraphic from "@/public/assets/ContactUsPageGraphic.png";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const watchTextarea = watch("message", false)
  const watchEmail = watch("email",false)
  const watchName = watch("name",false)

  const inputStyles =
    "w-full rounded-lg bg-primary-300 px-5 py-3 mb-7 placeholder-white placeholder:italic invalid:ring-2 invalid:ring-pink-500";

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      // default submit behavior will refresh the page, we don't want that
      e.preventDefault();
    }
  };

  return (
    <section className="mx-auto w-5/6 pb-32 pt-24" id="contactus">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>
            <span className="text-primary-500">JOIN NOW</span>
          </Htext>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            voluptatum nobis sed sequi quia dolorum deleniti fuga eos, est
            nesciunt repellendus? Vel, quisquam quae non facilis earum enim!
            Repellendus ullam facere quis quaerat odio eveniet nulla accusamus,
            earum nihil qui!
          </p>
        </motion.div>

        {/* Form and Image*/}
        <div className="mt-10 justify-between gap-8 sm:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/someemail@1234.com"
            >
              <input
                className={inputStyles}
                placeholder="NAME"
                type="text"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="-mt-6 mb-2 text-primary-500">
                  {errors.name.type === "required" && !watchName && "Your name is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              <input
                className={inputStyles}
                placeholder="EMAIL"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="-mt-6 mb-2 text-primary-500">
                  {errors.email.type === "required" && !watchEmail && "Your Email is required."}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && !watchTextarea && (
                <p className="-mt-6 mb-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "Your message is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-full bg-secondary-500 px-20 py-3 transition duration-300 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative mt-10 basis-2/5 md:mt-0"
          >
            <div className="w-full before:absolute before:-bottom-20 before:right-20 before:z-[-1] sm:before:content-evolvetext before:md:scale-125">
              <Image
                className="w-full md:w-4/5 mx-auto"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
