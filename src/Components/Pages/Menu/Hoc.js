import { useCallback, useEffect, useState, useMemo } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Updatedcomponent(Originalcomponent) {
  function Newcomponent() {
    const navigator = useNavigate();
    const [firstname, setfirstname] = useState("");
    const [savefirstname, setsavefirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [savelastname, setsavelastname] = useState("");

    const [scrolltop, setScrolltop] = useState("");
    const [refreshrandomnumber] = useState(<FiRefreshCw />);
    const [phonenumber, setphonenumber] = useState("");
    const [firstrandomnumber, setfirstrandomnumber] = useState(
      Math.floor(Math.random() * 100 + 7)
    );
    const [secondrandomnumber, setsecondrandomnumber] = useState(
      Math.floor(Math.random() * 100)
    );
    const [answer, setanswer] = useState("");

    const generaterandomnumber = useCallback(() => {
      setfirstrandomnumber(Math.floor(Math.random() * 100 + 7));
      setsecondrandomnumber(Math.floor(Math.random() * 100));
    }, []);

    const result = useMemo(() => {
      return firstrandomnumber + secondrandomnumber;
    }, [firstrandomnumber, secondrandomnumber]);

    const handleranswer = useCallback((e) => {
      setanswer(e.target.value);
    }, []);

    const handlerfirstname = useCallback((e) => {
      setfirstname(e.target.value);
    }, []);

    const handlerlastname = useCallback((e) => {
      setlastname(e.target.value);
    }, []);

    const handlerphonenumber = useCallback((e) => {
      setphonenumber(e.target.value);
    }, []);

    const submit = useCallback(() => {
      if (answer == result) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        localStorage.setItem("savelastname", lastname);
        localStorage.setItem("savefirstname", firstname);
        setsavelastname(lastname);
        setsavefirstname(firstname);
        setfirstname("");
        setlastname("");
        setanswer("");
        setphonenumber("");
        generaterandomnumber();
        navigator("/User");
      } else {
        alert("پاسخ محاسبه درست نمی باشد !!!!!");
      }
    }, [answer, result, lastname, firstname, generaterandomnumber, navigator]);

    useEffect(() => {
      window.addEventListener("scroll", indicator);

      return () => window.removeEventListener("scroll", indicator);
    }, []);

    const indicator = () => {
      const winscroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winscroll / height) * 100;
      setScrolltop(scrolled);
    };

    return (
      <Originalcomponent
        firstname={firstname}
        lastname={lastname}
        phonenumber={phonenumber}
        handlerphonenumber={handlerphonenumber}
        handlerfirstname={handlerfirstname}
        handlerlastname={handlerlastname}
        handleranswer={handleranswer}
        firstrandomnumber={firstrandomnumber}
        secondrandomnumber={secondrandomnumber}
        refreshrandomnumber={refreshrandomnumber}
        generaterandomnumber={generaterandomnumber}
        submit={submit}
        result={result}
        answer={answer}
        scrolltop={scrolltop}
      />
    );
  }
  return Newcomponent;
}

export default Updatedcomponent;
