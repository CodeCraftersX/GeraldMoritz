import { Link, useLocation } from "react-router-dom";
import { lawFirmAboutProfile } from "../components/about/lawFirmAboutProfile";
import Accordion from "../components/Accordion/Accordion";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";

function Practices() {
  const { issuesWeResolve, methodsWeUse } = lawFirmAboutProfile;
  const location = useLocation();
  const { id } = location.state || {};
  const [idExpanded, setIdExpanded] = useState<null | string>(null);

  const scrollToAccordion = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setIdExpanded(id);
  }, []);
  useEffect(() => {
    if (id) {
      scrollToAccordion(id);
    }
  }, [id, scrollToAccordion]);

  return (
    <>
      <div
        className={
          "w-full h-fit p-2 text-center relative flex items-center justify-center pb-[-10px] gap-2 flex-col *:font-medium " +
          "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500 after:rounded-full"
        }
      >
        <h2 className="text-2xl font-mono min-[498px]:text-3xl sm:text-4xl">
          Our Expertise
        </h2>
      </div>
      <section className="flex flex-col gap-5 items-center justify-start p-4 box-border mb-10">
        <div
          className={
            "w-full h-fit p-2 text-center relative flex items-center justify-center pb-[-10px] gap-2 flex-col *:font-medium " +
            "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500/50 after:rounded-full"
          }
        >
          <h2 className="text-xl font-mono min-[498px]:text-2xl sm:text-3xl">
            Method We Use
          </h2>
        </div>
        {methodsWeUse.length > 0 && (
          <ul className="w-full max-w-screen-md">
            {methodsWeUse.map((method, index) => (
              <Accordion
                key={index}
                expanded={
                  idExpanded === method.method.replace(/ /g, "-") ? true : false
                }
                onChange={() => setIdExpanded(method.method.replace(/ /g, "-"))}
                content={method.description}
                summary={method.method}
                id={method.method.replace(/ /g, "-")}
              />
            ))}
          </ul>
        )}
      </section>
      <section className="flex flex-col gap-5 items-center justify-start p-4 box-border mb-10">
        <div
          className={
            "w-full h-fit p-2 text-center relative flex items-center justify-center pb-[-10px] gap-2 flex-col *:font-medium " +
            "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500/50 after:rounded-full"
          }
        >
          <h2 className="text-xl font-mono min-[498px]:text-2xl sm:text-3xl">
            Issues We Resolve
          </h2>
        </div>
        {issuesWeResolve.length > 0 && (
          <ul className="w-full max-w-screen-md">
            {issuesWeResolve.map((issue, index) => (
              <Accordion
                key={index}
                expanded={
                  idExpanded === issue.issue.replace(/ /g, "-") ? true : false
                }
                onChange={() => setIdExpanded(issue.issue.replace(/ /g, "-"))}
                content={issue.description}
                summary={issue.issue}
                id={issue.issue.replace(/ /g, "-")}
              />
            ))}
          </ul>
        )}
      </section>
      <section className="flex flex-col gap-5 items-center justify-center box-border bg-black/5 py-10">
        <div
          className={
            "w-full h-fit p-2 text-center relative flex items-center justify-center pb-[-10px] gap-2 flex-col *:font-medium " +
            "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500 after:rounded-full"
          }
        >
          <h2 className="text-xl min-[498px]:text-2xl sm:text-3xl">
            Need a Lawyer?
          </h2>
        </div>
        <div className="w-full flex items-center justify-center gap-2 flex-wrap">
          <Link to={"/team"}>
            <Button
              variant="outlined"
              className="!py-4 !text-base min-[498px]:!text-lg sm:!text-xl font-mono !px-4 !border-black/90 hover:!bg-black/10 !text-black capitalize"
              disableElevation
            >
              View Profiles
            </Button>
          </Link>

          <Link to={"/contact"} state={{ section: "form" }}>
            <Button
              variant="contained"
              className="!py-4 !text-base min-[498px]:!text-lg sm:!text-xl font-mono !px-4 !bg-black/90 hover:!bg-black/70 !text-white capitalize"
              disableElevation
            >
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Practices;
