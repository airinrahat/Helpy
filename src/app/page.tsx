import HomeBanner from "../app/HomePage/HomeBanner";
import CallUs from "./HomePage/CallUs";
import Causes from "./HomePage/Causes";
import FAQ from "./HomePage/FAQ";
import Stories from "./HomePage/Stories";
import SubmitForm from "./HomePage/SubmitForm";

export default function Home() {
  return (
    <>
      <h2>
        <HomeBanner />
        <Causes />
        <Stories />
        <SubmitForm />
        <FAQ />
        <CallUs />
      </h2>
    </>
  );
}
