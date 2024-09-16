import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Logo from "../assests/logo.jpg";

const BookGuide = () => {
  const [state, setState] = React.useState("");
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const [andhrapradesh, setAndhrapradesh] = React.useState("");
  const handleAndhraPradesh = (e) => {
    setAndhrapradesh(e.target.value);
  };
  const [arunachalpradesh, setArunachalpradesh] = React.useState("");
  const handleArunachalPradesh = (e) => {
    setArunachalpradesh(e.target.value);
  };
  const [assam, setAssam] = React.useState("");
  const handleAssam = (e) => {
    setAssam(e.target.value);
  };
  const [bihar, setBihar] = React.useState("");
  const handleBihar = (e) => {
    setBihar(e.target.value);
  };
  const [chhattisgarh, setChhattisgarh] = React.useState("");
  const handleChhattisgarh = (e) => {
    setChhattisgarh(e.target.value);
  };
  const [goa, setGoa] = React.useState("");
  const handleGoa = (e) => {
    setGoa(e.target.value);
  };
  const [haryana, setHaryana] = React.useState("");
  const handleHaryana = (e) => {
    setHaryana(e.target.value);
  };
  const [himachalpradesh, setHimachalpradesh] = React.useState("");
  const handleHimachalPradesh = (e) => {
    setHimachalpradesh(e.target.value);
  };
  const [jharkhand, setJharkhand] = React.useState("");
  const handleJharkhand = (e) => {
    setJharkhand(e.target.value);
  };
  const [karnataka, setKarnataka] = React.useState("");
  const handleKarnataka = (e) => {
    setKarnataka(e.target.value);
  };
  const [gujarat, setGujarat] = React.useState("");
  const handleGujarat = (e) => {
    setGujarat(e.target.value);
  };
  const [kerala, setKerala] = React.useState("");
  const handleKerala = (e) => {
    setKerala(e.target.value);
  };
  const [madhyapradesh, setMadhyaPradesh] = React.useState("");
  const handleMadhyapradesh = (e) => {
    setMadhyaPradesh(e.target.value);
  };
  const [maharashtra, setMaharashtra] = React.useState("");
  const handleMaharashtra = (e) => {
    setMaharashtra(e.target.value);
  };
  const [manipur, setManipur] = React.useState("");
  const handleManipur = (e) => {
    setManipur(e.target.value);
  };
  const [meghalaya, setMeghalaya] = React.useState("");
  const handleMeghalaya = (e) => {
    setMeghalaya(e.target.value);
  };
  const [mizoram, setMizoram] = React.useState("");
  const handleMizoram = (e) => {
    setMizoram(e.target.value);
  };
  const [nagaland, setNagaland] = React.useState("");
  const handleNagaland = (e) => {
    setNagaland(e.target.value);
  };
  const [odisha, setOdisha] = React.useState("");
  const handleOdisha = (e) => {
    setOdisha(e.target.value);
  };
  const [punjab, setPunjab] = React.useState("");
  const handlePunjab = (e) => {
    setPunjab(e.target.value);
  };
  const [rajasthan, setRajasthan] = React.useState("");
  const handleRajasthan = (e) => {
    setRajasthan(e.target.value);
  };
  const [sikkim, setSikkim] = React.useState("");
  const handleSikkim = (e) => {
    setSikkim(e.target.value);
  };
  const [tamilnadu, setTamilNadu] = React.useState("");
  const handleTamilnadu = (e) => {
    setTamilNadu(e.target.value);
  };
  const [telangana, setTelangana] = React.useState("");
  const handleTelangana = (e) => {
    setTelangana(e.target.value);
  };
  const [tripura, setTripura] = React.useState("");
  const handleTripura = (e) => {
    setTripura(e.target.value);
  };
  const [uttarpradesh, setUttarPradesh] = React.useState("");
  const handleUttarpradesh = (e) => {
    setUttarPradesh(e.target.value);
  };
  const [uttarakhand, setUttarakhand] = React.useState("");
  const handleUttarakhand = (e) => {
    setUttarakhand(e.target.value);
  };
  const [westbengal, setWestBengal] = React.useState("");
  const handleWestbengal = (e) => {
    setWestBengal(e.target.value);
  };
  const [andamanandnicobarislands, setAndamanandNicobarIslands] =
    React.useState("");
  const handleAndamanandnicobarislands = (e) => {
    setAndamanandNicobarIslands(e.target.value);
  };
  const [delhi, setDelhi] = React.useState("");
  const handleDelhi = (e) => {
    setDelhi(e.target.value);
  };
  const [puducherry, setPuducherry] = React.useState("");
  const handlePuducherry = (e) => {
    setPuducherry(e.target.value);
  };
  const [ladakh, setLadakh] = React.useState("");
  const handleLadakh = (e) => {
    setLadakh(e.target.value);
  };
  const [jammuandkashmir, setJammuandkashmir] = React.useState("");
  const handleJammuandkashmir = (e) => {
    setJammuandkashmir(e.target.value);
  };
  const [
    dadraandnagarhavelianddamananddiu,
    setDadraandnagarhavelianddamananddiu,
  ] = React.useState("");
  const handleDadraandnagarhavelianddamananddiu = (e) => {
    setDadraandnagarhavelianddamananddiu(e.target.value);
  };

  return (
    <>
      <button className="fixed hidden lg:flex z-20 flex gap-1 bg-gray-100 border border-[#FD6512] px-3 rounded-[20px] py-1 top-[88%] right-[11%]">
        <i className="ri-phone-line" />
        <h1>51848484</h1>
      </button>
      <button className="fixed hidden lg:flex z-20 flex gap-1 border bg-[#FD6512] text-white px-3 rounded-[20px] py-1 top-[88%] right-[1%]">
        <i className="ri-map-pin-2-line" />
        <h1>Plan Your Trip</h1>
      </button>
      <div className="fixed hidden lg:flex h-[12vh] border-gray-100 bg-zinc-100 border items-center justify-center gap-10 flex w-full z-10 bg-white top-[90%] p-2">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[url(https://www.tourmyindia.com/imgnew/india-tour.svg)] bg-cover bg-center h-[5vh] w-[2vw]"></div>
          <h1 className="text-gray-500 font-normal">India Tour-Guides</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[url(https://www.tourmyindia.com/imgnew/international-tour.svg)] bg-cover bg-center h-[5vh] w-[2vw]"></div>
          <h1 className="text-gray-500 font-nornal">
            International Tour-Guides
          </h1>
        </div>
      </div>
      <nav className="nav flex w-full h-[10vh] justify-between items-center p-5 bg-white shadow-lg">
        {/* img and buttons section */}
        <div className="part1 flex items-center gap-4">
          {/* Logo */}
          <div className="h-[8vh] w-[15vw] lg:h-[10vh] lg:w-[4vw] bg-center bg-cover">
            <img className="logo-jpg-file" src={Logo} alt="" />
          </div>
          {/* Dropdown Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to={"/"}>
              <button className="flex items-center font-medium">
                Home{" "}
                <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
              </button>
            </Link>
            <button className="flex items-center font-medium">
              Destination
              <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
            </button>
            <button className="lg:flex hidden items-center font-medium">
              Booking{" "}
              <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
            </button>
            <button className="lg:flex hidden items-center font-medium">
              Contact Us{" "}
              <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
            </button>
            <button className="lg:flex hidden items-center font-medium">
              Weekend Getaways{" "}
              <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
            </button>
          </div>
          {/* Mobile Hamburger Icon */}
          <button className="md:hidden ml-[200px] text-gray-500 text-3xl">
            <i className="ri-menu-line" />
          </button>
        </div>
        {/* icons and buttons section */}
        <div className="part2 flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-5">
            <Link to={"/"}>
              <button className="flex items-center font-medium gap-2">
                Logout
              </button>
            </Link>
            {/* <button class="flex items-center font-medium gap-2"><i
                      class="text-xl ri-heart-pulse-fill"></i>Medical Tourism</button> */}
          </div>
        </div>
      </nav>
      <h1 className="book-guide-ka-head">CHOOSE THE LOCATION TO TRAVEL !!</h1>
      <div className="input-ki-feilds">
        <div className="first-field">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
            <InputLabel id="demo-simple-select-standard-label">
              State
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={state}
              onChange={handleChange}
              label="State"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="andhra pradesh">Andhra Pradesh</MenuItem>
              <MenuItem value="arunachal pradesh">Arunachal Pradesh</MenuItem>
              <MenuItem value="assam">Assam</MenuItem>
              <MenuItem value="bihar">Bihar</MenuItem>
              <MenuItem value="chhattisgarh">Chhattisgarh</MenuItem>
              <MenuItem value="goa">Goa</MenuItem>
              <MenuItem value="gujarat">Gujarat</MenuItem>
              <MenuItem value="haryana">Haryana</MenuItem>
              <MenuItem value="himachal pradesh">Himachal Pradesh</MenuItem>
              <MenuItem value="jharkhand">Jharkhand</MenuItem>
              <MenuItem value="karnataka">Karnataka</MenuItem>
              <MenuItem value="kerala">Kerala</MenuItem>
              <MenuItem value="madhya pradesh">Madhya Pradesh</MenuItem>
              <MenuItem value="maharashtra">Maharashtra</MenuItem>
              <MenuItem value="manipur">Manipur</MenuItem>
              <MenuItem value="meghalaya">Meghalaya</MenuItem>
              <MenuItem value="mizoram">Mizoram</MenuItem>
              <MenuItem value="nagaland">Nagaland</MenuItem>
              <MenuItem value="odisha">Odisha</MenuItem>
              <MenuItem value="punjab">Punjab</MenuItem>
              <MenuItem value="rajasthan">Rajasthan</MenuItem>
              <MenuItem value="sikkim">Sikkim</MenuItem>
              <MenuItem value="tamil nadu">Tamil Nadu</MenuItem>
              <MenuItem value="telangana">Telangana</MenuItem>
              <MenuItem value="tripura">Tripura</MenuItem>
              <MenuItem value="uttar pradesh">Uttar Pradesh</MenuItem>
              <MenuItem value="uttarakhand">Uttarakhand</MenuItem>
              <MenuItem value="west bengal">West Bengal</MenuItem>
              <MenuItem value="andaman and nicobar islands">
                Andaman and Nicobar Islands
              </MenuItem>
              <MenuItem value="chandigarh">Chandigarh</MenuItem>
              <MenuItem value="dadra and nagar haveli and daman and diu">
                Dadra and Nagar Haveli and Daman and Diu
              </MenuItem>
              <MenuItem value="lakshadweep">Lakshadweep</MenuItem>
              <MenuItem value="delhi">
                Delhi (National Capital Territory of Delhi)
              </MenuItem>
              <MenuItem value="puducherry">Puducherry</MenuItem>
              <MenuItem value="ladakh">Ladakh</MenuItem>
              <MenuItem value="jammu and kashmir">Jammu and Kashmir</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          {state == "" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="District"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "andhra pradesh" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={andhrapradesh}
                  onChange={handleAndhraPradesh}
                  label="Andhra Pradesh"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="ananthapuramu">Ananthapuramu</MenuItem>
                  <MenuItem value="chittoor">Chittoor</MenuItem>
                  <MenuItem value="east godavari">East Godavari</MenuItem>
                  <MenuItem value="guntur">Guntur</MenuItem>
                  <MenuItem value="krishna">Krishna</MenuItem>
                  <MenuItem value="kurnool">Kurnool</MenuItem>
                  <MenuItem value="nellore">Nellore</MenuItem>
                  <MenuItem value="prakasam">Prakasam</MenuItem>
                  <MenuItem value="spsr nellore">SPSR Nellore</MenuItem>
                  <MenuItem value="srikakulam">Srikakulam</MenuItem>
                  <MenuItem value="visakhapatnam">Visakhapatnam</MenuItem>
                  <MenuItem value="vizianagaram">Vizianagaram</MenuItem>
                  <MenuItem value="west godavari">West Godavari</MenuItem>
                  <MenuItem value="ysr kadapa">YSR Kadapa</MenuItem>
                  <MenuItem value="nandyal">Nandyal</MenuItem>
                  <MenuItem value="ananthapur">Ananthapur</MenuItem>
                  <MenuItem value="konaseema">Konaseema</MenuItem>
                  <MenuItem value="bapatla">Bapatla</MenuItem>
                  <MenuItem value="palnadu">Palnadu</MenuItem>
                  <MenuItem value="alluri sitarama raju">
                    Alluri Sitarama Raju
                  </MenuItem>
                  <MenuItem value="kakinada">Kakinada</MenuItem>
                  <MenuItem value="parvathipuram manyam">
                    Parvathipuram Manyam
                  </MenuItem>
                  <MenuItem value="srikakulam">Srikakulam</MenuItem>
                  <MenuItem value="ntr">NTR</MenuItem>
                  <MenuItem value="eluru">Eluru</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "arunachal pradesh" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={arunachalpradesh}
                  onChange={handleArunachalPradesh}
                  label="Arunachal Pradesh"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="anjaw">Anjaw</MenuItem>
                  <MenuItem value="changlang">Changlang</MenuItem>
                  <MenuItem value="dibang valley">Dibang Valley</MenuItem>
                  <MenuItem value="east kameng">East Kameng</MenuItem>
                  <MenuItem value="east siang">East Siang</MenuItem>
                  <MenuItem value="kamle">Kamle</MenuItem>
                  <MenuItem value="kra daadi">Kra Daadi</MenuItem>
                  <MenuItem value="kurung kumey">Kurung Kumey</MenuItem>
                  <MenuItem value="leparada">Leparada</MenuItem>
                  <MenuItem value="lohit">Lohit</MenuItem>
                  <MenuItem value="longding">Longding</MenuItem>
                  <MenuItem value="lower dibang valley">
                    Lower Dibang Valley
                  </MenuItem>
                  <MenuItem value="lower siang">Lower Siang</MenuItem>
                  <MenuItem value="lower subansiri">Lower Subansiri</MenuItem>
                  <MenuItem value="namsai">Namsai</MenuItem>
                  <MenuItem value="pakke kessang">Pakke Kessang</MenuItem>
                  <MenuItem value="papum pare">Papum Pare</MenuItem>
                  <MenuItem value="shi yomi">Shi Yomi</MenuItem>
                  <MenuItem value="siang">Siang</MenuItem>
                  <MenuItem value="tawang">Tawang</MenuItem>
                  <MenuItem value="tirap">Tirap</MenuItem>
                  <MenuItem value="upper siang">Upper Siang</MenuItem>
                  <MenuItem value="upper subansiri">Upper Subansiri</MenuItem>
                  <MenuItem value="west kameng">West Kameng</MenuItem>
                  <MenuItem value="west siang">West Siang</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "bihar" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={bihar}
                  onChange={handleBihar}
                  label="Bihar"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="araria">Araria</MenuItem>
                  <MenuItem value="arwal">Arwal</MenuItem>
                  <MenuItem value="aurangabad">Aurangabad</MenuItem>
                  <MenuItem value="banka">Banka</MenuItem>
                  <MenuItem value="begusarai">Begusarai</MenuItem>
                  <MenuItem value="bhagalpur">Bhagalpur</MenuItem>
                  <MenuItem value="bhojpur">Bhojpur</MenuItem>
                  <MenuItem value="buxar">Buxar</MenuItem>
                  <MenuItem value="darbhanga">Darbhanga</MenuItem>
                  <MenuItem value="east champaran">East Champaran</MenuItem>
                  <MenuItem value="gaya">Gaya</MenuItem>
                  <MenuItem value="gopalganj">Gopalganj</MenuItem>
                  <MenuItem value="jamui">Jamui</MenuItem>
                  <MenuItem value="jehanabad">Jehanabad</MenuItem>
                  <MenuItem value="kaimur">Kaimur</MenuItem>
                  <MenuItem value="katihar">Katihar</MenuItem>
                  <MenuItem value="khagaria">Khagaria</MenuItem>
                  <MenuItem value="kishanganj">Kishanganj</MenuItem>
                  <MenuItem value="lakhisarai">Lakhisarai</MenuItem>
                  <MenuItem value="madhepura">Madhepura</MenuItem>
                  <MenuItem value="madhubani">Madhubani</MenuItem>
                  <MenuItem value="munger">Munger</MenuItem>
                  <MenuItem value="muzaffarpur">Muzaffarpur</MenuItem>
                  <MenuItem value="nalanda">Nalanda</MenuItem>
                  <MenuItem value="nawada">Nawada</MenuItem>
                  <MenuItem value="patna">Patna</MenuItem>
                  <MenuItem value="purnia">Purnia</MenuItem>
                  <MenuItem value="rohtas">Rohtas</MenuItem>
                  <MenuItem value="saharsa">Saharsa</MenuItem>
                  <MenuItem value="samastipur">Samastipur</MenuItem>
                  <MenuItem value="saran">Saran</MenuItem>
                  <MenuItem value="sheikhpura">Sheikhpura</MenuItem>
                  <MenuItem value="sheohar">Sheohar</MenuItem>
                  <MenuItem value="sitamarhi">Sitamarhi</MenuItem>
                  <MenuItem value="siwan">Siwan</MenuItem>
                  <MenuItem value="supaul">Supaul</MenuItem>
                  <MenuItem value="vaishali">Vaishali</MenuItem>
                  <MenuItem value="west champaran">West Champaran</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "assam" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={assam}
                  onChange={handleAssam}
                  label="Assam"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="baksa">Baksa</MenuItem>
                  <MenuItem value="barpeta">Barpeta</MenuItem>
                  <MenuItem value="biswanath">Biswanath</MenuItem>
                  <MenuItem value="bongaigaon">Bongaigaon</MenuItem>
                  <MenuItem value="cachar">Cachar</MenuItem>
                  <MenuItem value="charaideo">Charaideo</MenuItem>
                  <MenuItem value="chirang">Chirang</MenuItem>
                  <MenuItem value="darrang">Darrang</MenuItem>
                  <MenuItem value="dhemaji">Dhemaji</MenuItem>
                  <MenuItem value="dhubri">Dhubri</MenuItem>
                  <MenuItem value="dibrugarh">Dibrugarh</MenuItem>
                  <MenuItem value="goalpara">Goalpara</MenuItem>
                  <MenuItem value="golaghat">Golaghat</MenuItem>
                  <MenuItem value="hailakandi">Hailakandi</MenuItem>
                  <MenuItem value="hojai">Hojai</MenuItem>
                  <MenuItem value="jorhat">Jorhat</MenuItem>
                  <MenuItem value="kamrup">Kamrup</MenuItem>
                  <MenuItem value="kamrup metropolitan">
                    Kamrup Metropolitan
                  </MenuItem>
                  <MenuItem value="karbi anglong">Karbi Anglong</MenuItem>
                  <MenuItem value="karimganj">Karimganj</MenuItem>
                  <MenuItem value="kokrajhar">Kokrajhar</MenuItem>
                  <MenuItem value="lakhimpur">Lakhimpur</MenuItem>
                  <MenuItem value="majuli">Majuli</MenuItem>
                  <MenuItem value="morigaon">Morigaon</MenuItem>
                  <MenuItem value="nagaon">Nagaon</MenuItem>
                  <MenuItem value="nalbari">Nalbari</MenuItem>
                  <MenuItem value="dima hasao">Dima Hasao</MenuItem>
                  <MenuItem value="sivasagar">Sivasagar</MenuItem>
                  <MenuItem value="sonitpur">Sonitpur</MenuItem>
                  <MenuItem value="south salmara-mankachar">
                    South Salmara-Mankachar
                  </MenuItem>
                  <MenuItem value="tinsukia">Tinsukia</MenuItem>
                  <MenuItem value="udalguri">Udalguri</MenuItem>
                  <MenuItem value="west karbi anglong">
                    West Karbi Anglong
                  </MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "chhattisgarh" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={chhattisgarh}
                  onChange={handleChhattisgarh}
                  label="Chhattisgarh"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="balod">Balod</MenuItem>
                  <MenuItem value="baloda bazar">Baloda Bazar</MenuItem>
                  <MenuItem value="balrampur">Balrampur</MenuItem>
                  <MenuItem value="bastar">Bastar</MenuItem>
                  <MenuItem value="bemetara">Bemetara</MenuItem>
                  <MenuItem value="bijapur">Bijapur</MenuItem>
                  <MenuItem value="bilaspur">Bilaspur</MenuItem>
                  <MenuItem value="dakshin bastar dantewada">
                    Dakshin Bastar Dantewada
                  </MenuItem>
                  <MenuItem value="dhamtari">Dhamtari</MenuItem>
                  <MenuItem value="durg">Durg</MenuItem>
                  <MenuItem value="gariaband">Gariaband</MenuItem>
                  <MenuItem value="gaurela pendra marwahi">
                    Gaurela Pendra Marwahi
                  </MenuItem>
                  <MenuItem value="janjgir champa">Janjgir Champa</MenuItem>
                  <MenuItem value="jashpur">Jashpur</MenuItem>
                  <MenuItem value="kabeerdham">Kabeerdham</MenuItem>
                  <MenuItem value="kondagaon">Kondagaon</MenuItem>
                  <MenuItem value="korba">Korba</MenuItem>
                  <MenuItem value="koriya">Koriya</MenuItem>
                  <MenuItem value="mahasamund">Mahasamund</MenuItem>
                  <MenuItem value="mungeli">Mungeli</MenuItem>
                  <MenuItem value="narayanpur">Narayanpur</MenuItem>
                  <MenuItem value="raigarh">Raigarh</MenuItem>
                  <MenuItem value="raipur">Raipur</MenuItem>
                  <MenuItem value="rajnandgaon">Rajnandgaon</MenuItem>
                  <MenuItem value="sukma">Sukma</MenuItem>
                  <MenuItem value="surajpur">Surajpur</MenuItem>
                  <MenuItem value="surguja">Surguja</MenuItem>
                  <MenuItem value="uttar bastar kanker">
                    Uttar Bastar Kanker
                  </MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "goa" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={goa}
                  onChange={handleGoa}
                  label="Goa"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="north goa">North Goa</MenuItem>
                  <MenuItem value="south goa">South Goa</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "gujarat" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={gujarat}
                  onChange={handleGujarat}
                  label="Gujarat"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="ahmedabad">Ahmedabad</MenuItem>
                  <MenuItem value="amreli">Amreli</MenuItem>
                  <MenuItem value="anand">Anand</MenuItem>
                  <MenuItem value="aravalli">Aravalli</MenuItem>
                  <MenuItem value="banaskantha">Banaskantha</MenuItem>
                  <MenuItem value="bharuch">Bharuch</MenuItem>
                  <MenuItem value="bhavnagar">Bhavnagar</MenuItem>
                  <MenuItem value="botad">Botad</MenuItem>
                  <MenuItem value="chhota udaipur">Chhota Udaipur</MenuItem>
                  <MenuItem value="dahod">Dahod</MenuItem>
                  <MenuItem value="dang">Dang</MenuItem>
                  <MenuItem value="devbhoomi dwarka">Devbhoomi Dwarka</MenuItem>
                  <MenuItem value="gandhinagar">Gandhinagar</MenuItem>
                  <MenuItem value="gir somnath">Gir Somnath</MenuItem>
                  <MenuItem value="jamnagar">Jamnagar</MenuItem>
                  <MenuItem value="junagadh">Junagadh</MenuItem>
                  <MenuItem value="kachchh">Kachchh</MenuItem>
                  <MenuItem value="kheda">Kheda</MenuItem>
                  <MenuItem value="mahisagar">Mahisagar</MenuItem>
                  <MenuItem value="mehsana">Mehsana</MenuItem>
                  <MenuItem value="morbi">Morbi</MenuItem>
                  <MenuItem value="narmada">Narmada</MenuItem>
                  <MenuItem value="navsari">Navsari</MenuItem>
                  <MenuItem value="panchmahal">Panchmahal</MenuItem>
                  <MenuItem value="patan">Patan</MenuItem>
                  <MenuItem value="porbandar">Porbandar</MenuItem>
                  <MenuItem value="rajkot">Rajkot</MenuItem>
                  <MenuItem value="sabarkantha">Sabarkantha</MenuItem>
                  <MenuItem value="surat">Surat</MenuItem>
                  <MenuItem value="surendranagar">Surendranagar</MenuItem>
                  <MenuItem value="tapi">Tapi</MenuItem>
                  <MenuItem value="vadodara">Vadodara</MenuItem>
                  <MenuItem value="valsad">Valsad</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "haryana" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={haryana}
                  onChange={handleHaryana}
                  label="Haryana"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="ambala">Ambala</MenuItem>
                  <MenuItem value="bhiwani">Bhiwani</MenuItem>
                  <MenuItem value="charkhi dadri">Charkhi Dadri</MenuItem>
                  <MenuItem value="faridabad">Faridabad</MenuItem>
                  <MenuItem value="fatehabad">Fatehabad</MenuItem>
                  <MenuItem value="gurugram">Gurugram</MenuItem>
                  <MenuItem value="hisar">Hisar</MenuItem>
                  <MenuItem value="jhajjar">Jhajjar</MenuItem>
                  <MenuItem value="jind">Jind</MenuItem>
                  <MenuItem value="kaithal">Kaithal</MenuItem>
                  <MenuItem value="karnal">Karnal</MenuItem>
                  <MenuItem value="kurukshetra">Kurukshetra</MenuItem>
                  <MenuItem value="mahendragarh">Mahendragarh</MenuItem>
                  <MenuItem value="nuh">Nuh</MenuItem>
                  <MenuItem value="palwal">Palwal</MenuItem>
                  <MenuItem value="panchkula">Panchkula</MenuItem>
                  <MenuItem value="panipat">Panipat</MenuItem>
                  <MenuItem value="rewari">Rewari</MenuItem>
                  <MenuItem value="rohtak">Rohtak</MenuItem>
                  <MenuItem value="sirsa">Sirsa</MenuItem>
                  <MenuItem value="sonipat">Sonipat</MenuItem>
                  <MenuItem value="yamunanagar">Yamunanagar</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "jharkhand" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={jharkhand}
                  onChange={handleJharkhand}
                  label="Jharkhand"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="bokaro">Bokaro</MenuItem>
                  <MenuItem value="chatra">Chatra</MenuItem>
                  <MenuItem value="deoghar">Deoghar</MenuItem>
                  <MenuItem value="dhanbad">Dhanbad</MenuItem>
                  <MenuItem value="dumka">Dumka</MenuItem>
                  <MenuItem value="east singhbhum">East Singhbhum</MenuItem>
                  <MenuItem value="garhwa">Garhwa</MenuItem>
                  <MenuItem value="giridih">Giridih</MenuItem>
                  <MenuItem value="godda">Godda</MenuItem>
                  <MenuItem value="gumla">Gumla</MenuItem>
                  <MenuItem value="hazaribagh">Hazaribagh</MenuItem>
                  <MenuItem value="jamtara">Jamtara</MenuItem>
                  <MenuItem value="khunti">Khunti</MenuItem>
                  <MenuItem value="koderma">Koderma</MenuItem>
                  <MenuItem value="latehar">Latehar</MenuItem>
                  <MenuItem value="lohardaga">Lohardaga</MenuItem>
                  <MenuItem value="pakur">Pakur</MenuItem>
                  <MenuItem value="palamu">Palamu</MenuItem>
                  <MenuItem value="ramgarh">Ramgarh</MenuItem>
                  <MenuItem value="ranchi">Ranchi</MenuItem>
                  <MenuItem value="sahibganj">Sahibganj</MenuItem>
                  <MenuItem value="seraikela kharsawan">
                    Seraikela Kharsawan
                  </MenuItem>
                  <MenuItem value="simdega">Simdega</MenuItem>
                  <MenuItem value="west singhbhum">West Singhbhum</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "himachal pradesh" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={himachalpradesh}
                  onChange={handleHimachalPradesh}
                  label="Himachal Pradesh"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="bilaspur">Bilaspur</MenuItem>
                  <MenuItem value="chamba">Chamba</MenuItem>
                  <MenuItem value="hamirpur">Hamirpur</MenuItem>
                  <MenuItem value="kangra">Kangra</MenuItem>
                  <MenuItem value="kinnaur">Kinnaur</MenuItem>
                  <MenuItem value="kullu">Kullu</MenuItem>
                  <MenuItem value="lahaul and spiti">Lahaul and Spiti</MenuItem>
                  <MenuItem value="mandi">Mandi</MenuItem>
                  <MenuItem value="shimla">Shimla</MenuItem>
                  <MenuItem value="sirmaur">Sirmaur</MenuItem>
                  <MenuItem value="solan">Solan</MenuItem>
                  <MenuItem value="una">Una</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "karnataka" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={karnataka}
                  onChange={handleKarnataka}
                  label="Karnataka"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="bagalkot">Bagalkot</MenuItem>
                  <MenuItem value="ballari">Ballari</MenuItem>
                  <MenuItem value="belagavi">Belagavi</MenuItem>
                  <MenuItem value="bengaluru rural">Bengaluru Rural</MenuItem>
                  <MenuItem value="bengaluru urban">Bengaluru Urban</MenuItem>
                  <MenuItem value="bidar">Bidar</MenuItem>
                  <MenuItem value="chamarajanagar">Chamarajanagar</MenuItem>
                  <MenuItem value="chikkaballapur">Chikkaballapur</MenuItem>
                  <MenuItem value="chikkamagaluru">Chikkamagaluru</MenuItem>
                  <MenuItem value="chitradurga">Chitradurga</MenuItem>
                  <MenuItem value="dakshina kannada">Dakshina Kannada</MenuItem>
                  <MenuItem value="davangere">Davangere</MenuItem>
                  <MenuItem value="dharwad">Dharwad</MenuItem>
                  <MenuItem value="gadag">Gadag</MenuItem>
                  <MenuItem value="hassan">Hassan</MenuItem>
                  <MenuItem value="haveri">Haveri</MenuItem>
                  <MenuItem value="kalaburagi">Kalaburagi</MenuItem>
                  <MenuItem value="kodagu">Kodagu</MenuItem>
                  <MenuItem value="kolar">Kolar</MenuItem>
                  <MenuItem value="koppal">Koppal</MenuItem>
                  <MenuItem value="mandya">Mandya</MenuItem>
                  <MenuItem value="mysuru">Mysuru</MenuItem>
                  <MenuItem value="raichur">Raichur</MenuItem>
                  <MenuItem value="ramanagara">Ramanagara</MenuItem>
                  <MenuItem value="shivamogga">Shivamogga</MenuItem>
                  <MenuItem value="tumakuru">Tumakuru</MenuItem>
                  <MenuItem value="udupi">Udupi</MenuItem>
                  <MenuItem value="uttara kannada">Uttara Kannada</MenuItem>
                  <MenuItem value="vijayapura">Vijayapura</MenuItem>
                  <MenuItem value="yadgir">Yadgir</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "kerala" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={kerala}
                  onChange={handleKerala}
                  label="Kerala"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="alappuzha">Alappuzha</MenuItem>
                  <MenuItem value="ernakulam">Ernakulam</MenuItem>
                  <MenuItem value="idukki">Idukki</MenuItem>
                  <MenuItem value="kannur">Kannur</MenuItem>
                  <MenuItem value="kasaragod">Kasaragod</MenuItem>
                  <MenuItem value="kollam">Kollam</MenuItem>
                  <MenuItem value="kottayam">Kottayam</MenuItem>
                  <MenuItem value="kozhikode">Kozhikode</MenuItem>
                  <MenuItem value="malappuram">Malappuram</MenuItem>
                  <MenuItem value="palakkad">Palakkad</MenuItem>
                  <MenuItem value="pathanamthitta">Pathanamthitta</MenuItem>
                  <MenuItem value="thiruvananthapuram">
                    Thiruvananthapuram
                  </MenuItem>
                  <MenuItem value="thrissur">Thrissur</MenuItem>
                  <MenuItem value="wayanad">Wayanad</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "madhya pradesh" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={madhyapradesh}
                  onChange={handleMadhyapradesh}
                  label="Madhya Pradesh"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="balaghat">Balaghat</MenuItem>
                  <MenuItem value="bara">Bara</MenuItem>
                  <MenuItem value="barwani">Barwani</MenuItem>
                  <MenuItem value="betul">Betul</MenuItem>
                  <MenuItem value="bhind">Bhind</MenuItem>
                  <MenuItem value="bhopal">Bhopal</MenuItem>
                  <MenuItem value="burhanpur">Burhanpur</MenuItem>
                  <MenuItem value="chhindwara">Chhindwara</MenuItem>
                  <MenuItem value="damoh">Damoh</MenuItem>
                  <MenuItem value="datia">Datia</MenuItem>
                  <MenuItem value="dewas">Dewas</MenuItem>
                  <MenuItem value="dhar">Dhar</MenuItem>
                  <MenuItem value="dindori">Dindori</MenuItem>
                  <MenuItem value="sehore">Sehore</MenuItem>
                  <MenuItem value="satna">Satna</MenuItem>
                  <MenuItem value="sagar">Sagar</MenuItem>
                  <MenuItem value="sanjh">Sanjh</MenuItem>
                  <MenuItem value="sidhi">Sidhi</MenuItem>
                  <MenuItem value="shivpuri">Shivpuri</MenuItem>
                  <MenuItem value="umaria">Umaria</MenuItem>
                  <MenuItem value="vidisha">Vidisha</MenuItem>
                  <MenuItem value="indore">Indore</MenuItem>
                  <MenuItem value="jabalpur">Jabalpur</MenuItem>
                  <MenuItem value="katni">Katni</MenuItem>
                  <MenuItem value="mandsaur">Mandsaur</MenuItem>
                  <MenuItem value="mandla">Mandla</MenuItem>
                  <MenuItem value="morena">Morena</MenuItem>
                  <MenuItem value="narsinghpur">Narsinghpur</MenuItem>
                  <MenuItem value="navapur">Navapur</MenuItem>
                  <MenuItem value="panna">Panna</MenuItem>
                  <MenuItem value="rewa">Rewa</MenuItem>
                  <MenuItem value="ratlam">Ratlam</MenuItem>
                  <MenuItem value="seoni">Seoni</MenuItem>
                  <MenuItem value="shivpuri">Shivpuri</MenuItem>
                  <MenuItem value="singrauli">Singrauli</MenuItem>
                  <MenuItem value="sagar">Sagar</MenuItem>
                  <MenuItem value="shahdol">Shahdol</MenuItem>
                  <MenuItem value="sheopur">Sheopur</MenuItem>
                  <MenuItem value="shivpuri">Shivpuri</MenuItem>
                  <MenuItem value="tikamgarh">Tikamgarh</MenuItem>
                  <MenuItem value="ujjain">Ujjain</MenuItem>
                  <MenuItem value="yadgir">Yadgir</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "maharashtra" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={maharashtra}
                  onChange={handleMaharashtra}
                  label="Maharashtra"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="ahmednagar">Ahmednagar</MenuItem>
                  <MenuItem value="akola">Akola</MenuItem>
                  <MenuItem value="amravati">Amravati</MenuItem>
                  <MenuItem value="aurangabad">Aurangabad</MenuItem>
                  <MenuItem value="beed">Beed</MenuItem>
                  <MenuItem value="bhandara">Bhandara</MenuItem>
                  <MenuItem value="bhandr">Bhandara</MenuItem>
                  <MenuItem value="buldhana">Buldhana</MenuItem>
                  <MenuItem value="chandrapur">Chandrapur</MenuItem>
                  <MenuItem value="chhatrapati sambhajinagar">
                    Chhatrapati Sambhajinagar
                  </MenuItem>
                  <MenuItem value="dhule">Dhule</MenuItem>
                  <MenuItem value="dombivli">Dombivli</MenuItem>
                  <MenuItem value="gondia">Gondia</MenuItem>
                  <MenuItem value="hingoli">Hingoli</MenuItem>
                  <MenuItem value="jalgaon">Jalgaon</MenuItem>
                  <MenuItem value="jalna">Jalna</MenuItem>
                  <MenuItem value="kolhapur">Kolhapur</MenuItem>
                  <MenuItem value="latur">Latur</MenuItem>
                  <MenuItem value="maharashtra">Maharashtra</MenuItem>
                  <MenuItem value="mumbai">Mumbai</MenuItem>
                  <MenuItem value="mumbai suburban">Mumbai Suburban</MenuItem>
                  <MenuItem value="nagpur">Nagpur</MenuItem>
                  <MenuItem value="nanded">Nanded</MenuItem>
                  <MenuItem value="nandurbar">Nandurbar</MenuItem>
                  <MenuItem value="nasik">Nasik</MenuItem>
                  <MenuItem value="palghar">Palghar</MenuItem>
                  <MenuItem value="parbhani">Parbhani</MenuItem>
                  <MenuItem value="pune">Pune</MenuItem>
                  <MenuItem value="ratnagiri">Ratnagiri</MenuItem>
                  <MenuItem value="satara">Satara</MenuItem>
                  <MenuItem value="sindhudurg">Sindhudurg</MenuItem>
                  <MenuItem value="solapur">Solapur</MenuItem>
                  <MenuItem value="thane">Thane</MenuItem>
                  <MenuItem value="washim">Washim</MenuItem>
                  <MenuItem value="wardha">Wardha</MenuItem>
                  <MenuItem value="washim">Washim</MenuItem>
                  <MenuItem value="yavatmal">Yavatmal</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "manipur" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={manipur}
                  onChange={handleManipur}
                  label="Manipur"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="bishnupur">Bishnupur</MenuItem>
                  <MenuItem value="churachandpur">Churachandpur</MenuItem>
                  <MenuItem value="imphal east">Imphal East</MenuItem>
                  <MenuItem value="imphal west">Imphal West</MenuItem>
                  <MenuItem value="jiribam">Jiribam</MenuItem>
                  <MenuItem value="kangpokpi">Kangpokpi</MenuItem>
                  <MenuItem value="noney">Noney</MenuItem>
                  <MenuItem value="senapati">Senapati</MenuItem>
                  <MenuItem value="tamenglong">Tamenglong</MenuItem>
                  <MenuItem value="tengnoupal">Tengnoupal</MenuItem>
                  <MenuItem value="thoubal">Thoubal</MenuItem>
                  <MenuItem value="ukhrul">Ukhrul</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "meghalaya" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={meghalaya}
                  onChange={handleMeghalaya}
                  label="Meghalaya"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="east garo hills">East Garo Hills</MenuItem>
                  <MenuItem value="east jaintia hills">
                    East Jaintia Hills
                  </MenuItem>
                  <MenuItem value="east khasi hills">East Khasi Hills</MenuItem>
                  <MenuItem value="north garo hills">North Garo Hills</MenuItem>
                  <MenuItem value="ri bhoi">Ri Bhoi</MenuItem>
                  <MenuItem value="south garo hills">South Garo Hills</MenuItem>
                  <MenuItem value="south west garo hills">
                    South West Garo Hills
                  </MenuItem>
                  <MenuItem value="south west khasi hills">
                    South West Khasi Hills
                  </MenuItem>
                  <MenuItem value="west garo hills">West Garo Hills</MenuItem>
                  <MenuItem value="west jaintia hills">
                    West Jaintia Hills
                  </MenuItem>
                  <MenuItem value="west khasi hills">West Khasi Hills</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "mizoram" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={mizoram}
                  onChange={handleMizoram}
                  label="Mizoram"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="aizawl">Aizawl</MenuItem>
                  <MenuItem value="chemray">Chemray</MenuItem>
                  <MenuItem value="kolasib">Kolasib</MenuItem>
                  <MenuItem value="lawngtlai">Lawngtlai</MenuItem>
                  <MenuItem value="mamit">Mamit</MenuItem>
                  <MenuItem value="serchhip">Serchhip</MenuItem>
                  <MenuItem value="khuangleng">Khuangleng</MenuItem>
                  <MenuItem value="khawzawl">Khawzawl</MenuItem>
                  <MenuItem value="hnahthial">Hnahthial</MenuItem>
                  <MenuItem value="saitual">Saitual</MenuItem>
                  <MenuItem value="lunglei">Lunglei</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "nagaland" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={nagaland}
                  onChange={handleNagaland}
                  label="Nagaland"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="dimapur">Dimapur</MenuItem>
                  <MenuItem value="kiphire">Kiphire</MenuItem>
                  <MenuItem value="kohima">Kohima</MenuItem>
                  <MenuItem value="longleng">Longleng</MenuItem>
                  <MenuItem value="mokokchung">Mokokchung</MenuItem>
                  <MenuItem value="mon">Mon</MenuItem>
                  <MenuItem value="phek">Phek</MenuItem>
                  <MenuItem value="tuensang">Tuensang</MenuItem>
                  <MenuItem value="wokha">Wokha</MenuItem>
                  <MenuItem value="zunheboto">Zunheboto</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "odisha" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={odisha}
                  onChange={handleOdisha}
                  label="Odisha"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="angul">Angul</MenuItem>
                  <MenuItem value="balangir">Balangir</MenuItem>
                  <MenuItem value="balasore">Balasore</MenuItem>
                  <MenuItem value="bargarh">Bargarh</MenuItem>
                  <MenuItem value="bhadrak">Bhadrak</MenuItem>
                  <MenuItem value="boudh">Boudh</MenuItem>
                  <MenuItem value="cuttack">Cuttack</MenuItem>
                  <MenuItem value="deogarh">Deogarh</MenuItem>
                  <MenuItem value="dhenkanal">Dhenkanal</MenuItem>
                  <MenuItem value="gajapati">Gajapati</MenuItem>
                  <MenuItem value="ganjam">Ganjam</MenuItem>
                  <MenuItem value="jagatsinghpur">Jagatsinghpur</MenuItem>
                  <MenuItem value="jajpur">Jajpur</MenuItem>
                  <MenuItem value="jharsuguda">Jharsuguda</MenuItem>
                  <MenuItem value="kalahandi">Kalahandi</MenuItem>
                  <MenuItem value="kandhamal">Kandhamal</MenuItem>
                  <MenuItem value="kendrapara">Kendrapara</MenuItem>
                  <MenuItem value="kendujhar">Kendujhar</MenuItem>
                  <MenuItem value="khordha">Khordha</MenuItem>
                  <MenuItem value="koraput">Koraput</MenuItem>
                  <MenuItem value="malkangiri">Malkangiri</MenuItem>
                  <MenuItem value="mayurbhanj">Mayurbhanj</MenuItem>
                  <MenuItem value="nabarangpur">Nabarangpur</MenuItem>
                  <MenuItem value="nayagarh">Nayagarh</MenuItem>
                  <MenuItem value="nuapada">Nuapada</MenuItem>
                  <MenuItem value="puri">Puri</MenuItem>
                  <MenuItem value="rayagada">Rayagada</MenuItem>
                  <MenuItem value="sambalpur">Sambalpur</MenuItem>
                  <MenuItem value="subarnapur">Subarnapur</MenuItem>
                  <MenuItem value="sundargarh">Sundargarh</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "punjab" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={punjab}
                  onChange={handlePunjab}
                  label="Punjab"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="amritsar">Amritsar</MenuItem>
                  <MenuItem value="barnala">Barnala</MenuItem>
                  <MenuItem value="bathinda">Bathinda</MenuItem>
                  <MenuItem value="faridkot">Faridkot</MenuItem>
                  <MenuItem value="fatehgarh sahib">Fatehgarh Sahib</MenuItem>
                  <MenuItem value="firozepur">Firozepur</MenuItem>
                  <MenuItem value="gharghoda">Gharghoda</MenuItem>
                  <MenuItem value="gurdaspur">Gurdaspur</MenuItem>
                  <MenuItem value="jalandhar">Jalandhar</MenuItem>
                  <MenuItem value="kapurthala">Kapurthala</MenuItem>
                  <MenuItem value="ludhiana">Ludhiana</MenuItem>
                  <MenuItem value="mansa">Mansa</MenuItem>
                  <MenuItem value="moga">Moga</MenuItem>
                  <MenuItem value="muktsar">Muktsar</MenuItem>
                  <MenuItem value="nawanshahr">Nawanshahr</MenuItem>
                  <MenuItem value="pathankot">Pathankot</MenuItem>
                  <MenuItem value="patiala">Patiala</MenuItem>
                  <MenuItem value="ropar">Ropar</MenuItem>
                  <MenuItem value="sangrur">Sangrur</MenuItem>
                  <MenuItem value="shaheed bhagat singh nagar">
                    Shaheed Bhagat Singh Nagar
                  </MenuItem>
                  <MenuItem value="tarn taran">Tarn Taran</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "rajasthan" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={rajasthan}
                  onChange={handleRajasthan}
                  label="Rajasthan"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="ajmer">Ajmer</MenuItem>
                  <MenuItem value="alwar">Alwar</MenuItem>
                  <MenuItem value="banswara">Banswara</MenuItem>
                  <MenuItem value="baran">Baran</MenuItem>
                  <MenuItem value="barmer">Barmer</MenuItem>
                  <MenuItem value="bharatpur">Bharatpur</MenuItem>
                  <MenuItem value="bhilwara">Bhilwara</MenuItem>
                  <MenuItem value="bikaner">Bikaner</MenuItem>
                  <MenuItem value="bundi">Bundi</MenuItem>
                  <MenuItem value="chittorgarh">Chittorgarh</MenuItem>
                  <MenuItem value="churu">Churu</MenuItem>
                  <MenuItem value="dausa">Dausa</MenuItem>
                  <MenuItem value="dholpur">Dholpur</MenuItem>
                  <MenuItem value="dungarpur">Dungarpur</MenuItem>
                  <MenuItem value="hanumangarh">Hanumangarh</MenuItem>
                  <MenuItem value="jaipur">Jaipur</MenuItem>
                  <MenuItem value="jaisalmer">Jaisalmer</MenuItem>
                  <MenuItem value="jattsar">Jattsar</MenuItem>
                  <MenuItem value="jhalawar">Jhalawar</MenuItem>
                  <MenuItem value="jhunjhunu">Jhunjhunu</MenuItem>
                  <MenuItem value="jodhpur">Jodhpur</MenuItem>
                  <MenuItem value="karauli">Karauli</MenuItem>
                  <MenuItem value="kutch">Kutch</MenuItem>
                  <MenuItem value="nagaur">Nagaur</MenuItem>
                  <MenuItem value="pali">Pali</MenuItem>
                  <MenuItem value="pratapgarh">Pratapgarh</MenuItem>
                  <MenuItem value="rajsamand">Rajsamand</MenuItem>
                  <MenuItem value="rashtapitha">Rashtapitha</MenuItem>
                  <MenuItem value="sawai madhopur">Sawai Madhopur</MenuItem>
                  <MenuItem value="sikar">Sikar</MenuItem>
                  <MenuItem value="sirohi">Sirohi</MenuItem>
                  <MenuItem value="tonk">Tonk</MenuItem>
                  <MenuItem value="udaipur">Udaipur</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "sikkim" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={sikkim}
                  onChange={handleSikkim}
                  label="Sikkim"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="east sikkim">East Sikkim</MenuItem>
                  <MenuItem value="north sikkim">North Sikkim</MenuItem>
                  <MenuItem value="south sikkim">South Sikkim</MenuItem>
                  <MenuItem value="west sikkim">West Sikkim</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "tamil nadu" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={tamilnadu}
                  onChange={handleTamilnadu}
                  label="Tamil Nadu"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="ariyalur">Ariyalur</MenuItem>
                  <MenuItem value="chennai">Chennai</MenuItem>
                  <MenuItem value="coimbatore">Coimbatore</MenuItem>
                  <MenuItem value="cuddalore">Cuddalore</MenuItem>
                  <MenuItem value="dharmapuri">Dharmapuri</MenuItem>
                  <MenuItem value="dindigul">Dindigul</MenuItem>
                  <MenuItem value="erode">Erode</MenuItem>
                  <MenuItem value="kallakurichi">Kallakurichi</MenuItem>
                  <MenuItem value="kancheepuram">Kancheepuram</MenuItem>
                  <MenuItem value="kangeyam">Kangeyam</MenuItem>
                  <MenuItem value="karur">Karur</MenuItem>
                  <MenuItem value="krishnagiri">Krishnagiri</MenuItem>
                  <MenuItem value="madurai">Madurai</MenuItem>
                  <MenuItem value="nagapattinam">Nagapattinam</MenuItem>
                  <MenuItem value="namakkal">Namakkal</MenuItem>
                  <MenuItem value="nilgiris">Nilgiris</MenuItem>
                  <MenuItem value="perambalur">Perambalur</MenuItem>
                  <MenuItem value="pudukkottai">Pudukkottai</MenuItem>
                  <MenuItem value="ramanathapuram">Ramanathapuram</MenuItem>
                  <MenuItem value="salem">Salem</MenuItem>
                  <MenuItem value="sivaganga">Sivaganga</MenuItem>
                  <MenuItem value="tenkasi">Tenkasi</MenuItem>
                  <MenuItem value="thanjavur">Thanjavur</MenuItem>
                  <MenuItem value="the nilgiris">The Nilgiris</MenuItem>
                  <MenuItem value="tiruvarur">Tiruvarur</MenuItem>
                  <MenuItem value="tiruchirappalli">Tiruchirappalli</MenuItem>
                  <MenuItem value="tirunelveli">Tirunelveli</MenuItem>
                  <MenuItem value="tiruvarur">Tiruvarur</MenuItem>
                  <MenuItem value="tirupathur">Tirupathur</MenuItem>
                  <MenuItem value="tuticorin">Tuticorin</MenuItem>
                  <MenuItem value="vellore">Vellore</MenuItem>
                  <MenuItem value="virudhunagar">Virudhunagar</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "telangana" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={telangana}
                  onChange={handleTelangana}
                  label="Telangana"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="adilabad">Adilabad</MenuItem>
                  <MenuItem value="bhadradri kothagudem">
                    Bhadradri Kothagudem
                  </MenuItem>
                  <MenuItem value="hanamkonda">Hanamkonda</MenuItem>
                  <MenuItem value="jagtial">Jagtial</MenuItem>
                  <MenuItem value="jangaon">Jangaon</MenuItem>
                  <MenuItem value="jayashankar bhupalpally">
                    Jayashankar Bhupalpally
                  </MenuItem>
                  <MenuItem value="jogulamba gadwal">Jogulamba Gadwal</MenuItem>
                  <MenuItem value="kamareddy">Kamareddy</MenuItem>
                  <MenuItem value="karimnagar">Karimnagar</MenuItem>
                  <MenuItem value="khammam">Khammam</MenuItem>
                  <MenuItem value="komaram bheem asifabad">
                    Komaram Bheem Asifabad
                  </MenuItem>
                  <MenuItem value="mahabubabad">Mahabubabad</MenuItem>
                  <MenuItem value="mahabubnagar">Mahabubnagar</MenuItem>
                  <MenuItem value="mancherial">Mancherial</MenuItem>
                  <MenuItem value="medak">Medak</MenuItem>
                  <MenuItem value="medchal malkajgiri">
                    Medchal Malkajgiri
                  </MenuItem>
                  <MenuItem value="mulugu">Mulugu</MenuItem>
                  <MenuItem value="nagar kurnool">Nagar Kurnool</MenuItem>
                  <MenuItem value="nalgonda">Nalgonda</MenuItem>
                  <MenuItem value="narayanpet">Narayanpet</MenuItem>
                  <MenuItem value="nirmal">Nirmal</MenuItem>
                  <MenuItem value="nizamabad">Nizamabad</MenuItem>
                  <MenuItem value="peddapalli">Peddapalli</MenuItem>
                  <MenuItem value="rajanna sircilla">Rajanna Sircilla</MenuItem>
                  <MenuItem value="rangareddy">Rangareddy</MenuItem>
                  <MenuItem value="sangareddy">Sangareddy</MenuItem>
                  <MenuItem value="siddipet">Siddipet</MenuItem>
                  <MenuItem value="suryapet">Suryapet</MenuItem>
                  <MenuItem value="vikarabad">Vikarabad</MenuItem>
                  <MenuItem value="wanaparthy">Wanaparthy</MenuItem>
                  <MenuItem value="warangal">Warangal</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "tripura" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={tripura}
                  onChange={handleTripura}
                  label="Tripura"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="agartala">Agartala</MenuItem>
                  <MenuItem value="belonia">Belonia</MenuItem>
                  <MenuItem value="dhalai">Dhalai</MenuItem>
                  <MenuItem value="gumati">Gumati</MenuItem>
                  <MenuItem value="khowai">Khowai</MenuItem>
                  <MenuItem value="north tripura">North Tripura</MenuItem>
                  <MenuItem value="sipahijala">Sipahijala</MenuItem>
                  <MenuItem value="south tripura">South Tripura</MenuItem>
                  <MenuItem value="west tripura">West Tripura</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "uttar pradesh" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={uttarpradesh}
                  onChange={handleUttarpradesh}
                  label="Uttar Pradesh"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="agra">Agra</MenuItem>
                  <MenuItem value="aligarh">Aligarh</MenuItem>
                  <MenuItem value="allahabad">Allahabad</MenuItem>
                  <MenuItem value="ambedkar nagar">Ambedkar Nagar</MenuItem>
                  <MenuItem value="amethi">Amethi</MenuItem>
                  <MenuItem value="amroha">Amroha</MenuItem>
                  <MenuItem value="auraiya">Auraiya</MenuItem>
                  <MenuItem value="azamgarh">Azamgarh</MenuItem>
                  <MenuItem value="badaun">Badaun</MenuItem>
                  <MenuItem value="baghpat">Baghpat</MenuItem>
                  <MenuItem value="bahraich">Bahraich</MenuItem>
                  <MenuItem value="ballia">Ballia</MenuItem>
                  <MenuItem value="balrampur">Balrampur</MenuItem>
                  <MenuItem value="banda">Banda</MenuItem>
                  <MenuItem value="bangar">Bangar</MenuItem>
                  <MenuItem value="bareilly">Bareilly</MenuItem>
                  <MenuItem value="basti">Basti</MenuItem>
                  <MenuItem value="batchun">Batchun</MenuItem>
                  <MenuItem value="bijnor">Bijnor</MenuItem>
                  <MenuItem value="bulandshahr">Bulandshahr</MenuItem>
                  <MenuItem value="chandauli">Chandauli</MenuItem>
                  <MenuItem value="chitrakoot">Chitrakoot</MenuItem>
                  <MenuItem value="deoria">Deoria</MenuItem>
                  <MenuItem value="etah">Etah</MenuItem>
                  <MenuItem value="etawah">Etawah</MenuItem>
                  <MenuItem value="faizabad">Faizabad</MenuItem>
                  <MenuItem value="farrukhabad">Farrukhabad</MenuItem>
                  <MenuItem value="fatehpur">Fatehpur</MenuItem>
                  <MenuItem value="firozabad">Firozabad</MenuItem>
                  <MenuItem value="gautam buddha nagar">
                    Gautam Buddha Nagar
                  </MenuItem>
                  <MenuItem value="ghaziabad">Ghaziabad</MenuItem>
                  <MenuItem value="gonda">Gonda</MenuItem>
                  <MenuItem value="gorakhpur">Gorakhpur</MenuItem>
                  <MenuItem value="hamirpur">Hamirpur</MenuItem>
                  <MenuItem value="hathras">Hathras</MenuItem>
                  <MenuItem value="jalaun">Jalaun</MenuItem>
                  <MenuItem value="jalalabad">Jalalabad</MenuItem>
                  <MenuItem value="jashpur">Jashpur</MenuItem>
                  <MenuItem value="jhansi">Jhansi</MenuItem>
                  <MenuItem value="kanpur nagar">Kanpur Nagar</MenuItem>
                  <MenuItem value="kanpur dehat">Kanpur Dehat</MenuItem>
                  <MenuItem value="kushinagar">Kushinagar</MenuItem>
                  <MenuItem value="lakhimpur kheri">Lakhimpur Kheri</MenuItem>
                  <MenuItem value="lalitpur">Lalitpur</MenuItem>
                  <MenuItem value="lucknow">Lucknow</MenuItem>
                  <MenuItem value="maharajganj">Maharajganj</MenuItem>
                  <MenuItem value="mainpuri">Mainpuri</MenuItem>
                  <MenuItem value="mathura">Mathura</MenuItem>
                  <MenuItem value="mau">Mau</MenuItem>
                  <MenuItem value="meerut">Meerut</MenuItem>
                  <MenuItem value="mirzapur">Mirzapur</MenuItem>
                  <MenuItem value="moradabad">Moradabad</MenuItem>
                  <MenuItem value="muzaffarnagar">Muzaffarnagar</MenuItem>
                  <MenuItem value="pilibhit">Pilibhit</MenuItem>
                  <MenuItem value="pratapgarh">Pratapgarh</MenuItem>
                  <MenuItem value="raebareli">Raebareli</MenuItem>
                  <MenuItem value="rampur">Rampur</MenuItem>
                  <MenuItem value="shahjahanpur">Shahjahanpur</MenuItem>
                  <MenuItem value="shamli">Shamli</MenuItem>
                  <MenuItem value="siddharthnagar">Siddharthnagar</MenuItem>
                  <MenuItem value="sitapur">Sitapur</MenuItem>
                  <MenuItem value="sonbhadra">Sonbhadra</MenuItem>
                  <MenuItem value="sultanpur">Sultanpur</MenuItem>
                  <MenuItem value="unnao">Unnao</MenuItem>
                  <MenuItem value="varanasi">Varanasi</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "uttarakhand" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={uttarakhand}
                  onChange={handleUttarakhand}
                  label="Uttarakhand"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="almora">Almora</MenuItem>
                  <MenuItem value="bageshwar">Bageshwar</MenuItem>
                  <MenuItem value="chamoli">Chamoli</MenuItem>
                  <MenuItem value="champawat">Champawat</MenuItem>
                  <MenuItem value="dehradun">Dehradun</MenuItem>
                  <MenuItem value="haridwar">Haridwar</MenuItem>
                  <MenuItem value="nainital">Nainital</MenuItem>
                  <MenuItem value="pauri garhwal">Pauri Garhwal</MenuItem>
                  <MenuItem value="pithoragarh">Pithoragarh</MenuItem>
                  <MenuItem value="rudraprayag">Rudraprayag</MenuItem>
                  <MenuItem value="tehri garhwal">Tehri Garhwal</MenuItem>
                  <MenuItem value="udham singh nagar">
                    Udham Singh Nagar
                  </MenuItem>
                  <MenuItem value="uttarkashi">Uttarkashi</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "west bengal" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={westbengal}
                  onChange={handleWestbengal}
                  label="West Bengal"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="aalpurduar">Alipurduar</MenuItem>
                  <MenuItem value="bankura">Bankura</MenuItem>
                  <MenuItem value="birbhum">Birbhum</MenuItem>
                  <MenuItem value="burdwan">Burdwan</MenuItem>
                  <MenuItem value="dakshin dinajpur">Dakshin Dinajpur</MenuItem>
                  <MenuItem value="darjeeling">Darjeeling</MenuItem>
                  <MenuItem value="hooghly">Hooghly</MenuItem>
                  <MenuItem value="howrah">Howrah</MenuItem>
                  <MenuItem value="jalpaiguri">Jalpaiguri</MenuItem>
                  <MenuItem value="jalpaiguri">Jalpaiguri</MenuItem>
                  <MenuItem value="kalimpong">Kalimpong</MenuItem>
                  <MenuItem value="malda">Malda</MenuItem>
                  <MenuItem value="mursidabad">Murshidabad</MenuItem>
                  <MenuItem value="nadia">Nadia</MenuItem>
                  <MenuItem value="north 24 parganas">
                    North 24 Parganas
                  </MenuItem>
                  <MenuItem value="paschim bardhaman">
                    Paschim Bardhaman
                  </MenuItem>
                  <MenuItem value="paschim medinipur">
                    Paschim Medinipur
                  </MenuItem>
                  <MenuItem value="purba bardhaman">Purba Bardhaman</MenuItem>
                  <MenuItem value="purba medinipur">Purba Medinipur</MenuItem>
                  <MenuItem value="purulia">Purulia</MenuItem>
                  <MenuItem value="south 24 parganas">
                    South 24 Parganas
                  </MenuItem>
                  <MenuItem value="uttar dinajpur">Uttar Dinajpur</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "andaman and nicobar islands" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={andamanandnicobarislands}
                  onChange={handleAndamanandnicobarislands}
                  label="Andaman and Nicobar Islands"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="andaman and nicobar islands">
                    Andaman and Nicobar Islands
                  </MenuItem>
                  <MenuItem value="north and middle andaman">
                    North and Middle Andaman
                  </MenuItem>
                  <MenuItem value="south andaman">South Andaman</MenuItem>
                  <MenuItem value="nicobar">Nicobar</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "delhi" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={delhi}
                  onChange={handleDelhi}
                  label="Delhi"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="central delhi">Central Delhi</MenuItem>
                  <MenuItem value="east delhi">East Delhi</MenuItem>
                  <MenuItem value="new delhi">New Delhi</MenuItem>
                  <MenuItem value="north delhi">North Delhi</MenuItem>
                  <MenuItem value="north east delhi">North East Delhi</MenuItem>
                  <MenuItem value="north west delhi">North West Delhi</MenuItem>
                  <MenuItem value="south delhi">South Delhi</MenuItem>
                  <MenuItem value="south east delhi">South East Delhi</MenuItem>
                  <MenuItem value="south west delhi">South West Delhi</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "puducherry" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={puducherry}
                  onChange={handlePuducherry}
                  label="Puducherry"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="karaikal">Karaikal</MenuItem>
                  <MenuItem value="mahe">Mahe</MenuItem>
                  <MenuItem value="puducherry">Puducherry</MenuItem>
                  <MenuItem value="yanam">Yanam</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "ladakh" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={ladakh}
                  onChange={handleLadakh}
                  label="Ladakh"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="leh">Leh</MenuItem>
                  <MenuItem value="kargil">Kargil</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "jammu and kashmir" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={jammuandkashmir}
                  onChange={handleJammuandkashmir}
                  label="Jammu and Kashmir"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="anantnag">Anantnag</MenuItem>
                  <MenuItem value="bandipora">Bandipora</MenuItem>
                  <MenuItem value="baramulla">Baramulla</MenuItem>
                  <MenuItem value="doda">Doda</MenuItem>
                  <MenuItem value="ganderbal">Ganderbal</MenuItem>
                  <MenuItem value="jammu">Jammu</MenuItem>
                  <MenuItem value="kathua">Kathua</MenuItem>
                  <MenuItem value="kishtwar">Kishtwar</MenuItem>
                  <MenuItem value="kulgam">Kulgam</MenuItem>
                  <MenuItem value="kupwara">Kupwara</MenuItem>
                  <MenuItem value="poonch">Poonch</MenuItem>
                  <MenuItem value="pulwama">Pulwama</MenuItem>
                  <MenuItem value="rajouri">Rajouri</MenuItem>
                  <MenuItem value="ramban">Ramban</MenuItem>
                  <MenuItem value="reasi">Reasi</MenuItem>
                  <MenuItem value="samba">Samba</MenuItem>
                  <MenuItem value="shopian">Shopian</MenuItem>
                  <MenuItem value="srinagar">Srinagar</MenuItem>
                  <MenuItem value="udhampur">Udhampur</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state == "dadra and nagar haveli and daman and diu" ? (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={dadraandnagarhavelianddamananddiu}
                  onChange={handleDadraandnagarhavelianddamananddiu}
                  label="Dadra and Nagar Haveli and Daman and Diu"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="dadra and nagar haveli">
                    Dadra and Nagar Haveli
                  </MenuItem>
                  <MenuItem value="daman">Daman</MenuItem>
                  <MenuItem value="diu">Diu</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="logo-ka-div">
        {state == "" ? (
          <>
            <Link to={"/rajyadav"}>
              <Card
                name={"Raj Yadav"}
                image={
                  "https://plus.unsplash.com/premium_photo-1718146018854-ad4aa928d9c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={4.5}
                locations={["Bhopal, Gwalior, Indore"]}
              />
            </Link>
            <Link to={"/ayushsingh"}>
              <Card
                name={"Ayush Singh"}
                image={
                  "https://images.unsplash.com/photo-1468218457742-ee484fe2fe4c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={4}
                locations={
                  "Visakhapatnam, Vijayawada, Amaravati, Guntur, Kurnool"
                }
              />
            </Link>
            <Link to={"/hemanttiwari"}>
              <Card
                name={"Hemant Tiwari"}
                image={
                  "https://plus.unsplash.com/premium_photo-1678703870782-918c21aac2b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={3.5}
                locations={"Itanagar, Pasighat, Tawang"}
              />
            </Link>
            <Link to={"/radhamishra"}>
              <Card
                name={"Radha Mishra"}
                image={
                  "https://images.unsplash.com/photo-1591980896142-4e36328411ec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={3.5}
                locations={"Raipur, Bhilai, korba"}
              />
            </Link>
            <Link to={"/goldykumari"}>
              <Card
                name={"Goldy Kumari"}
                image={
                  "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={5}
                locations={"Patna, Darbhanga, Gaya"}
              />
            </Link>
            <Link to={"/shivamsahu"}>
              <Card
                name={"Shivam Sahu"}
                image={
                  "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={3}
                locations={"Guwahati, Silchar, Digboi"}
              />
            </Link>
            <Link to={"/himanshumeena"}>
              <Card
                name={"Himanshu Meena"}
                image={
                  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={2.5}
                locations={"Fort Aguada, Baga Beech, Arambol Beech"}
              />
            </Link>
            <Link to={"/jethalalgada"}>
              <Card
                name={"Jethalal Gada"}
                image={
                  "https://static.india.com/wp-content/uploads/2021/12/pjimage-39-5.jpg?impolicy=Medium_Widthonly&w=700"
                }
                rating={4.5}
                locations={"Surat, Ahmedabad, Navrati"}
              />
            </Link>
            <Link to={"/elvishyadav"}>
              <Card
                name={"Elvish Yadav"}
                image={
                  "https://imgs.search.brave.com/bctbf3SmMC6B549lir8saUEaiPyYfT9O8GB1BX3JRn8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhldHZqdW5raWVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMS9FbHZp/c2hZYWRhdi0uanBn"
                }
                rating={1}
                locations={"Gurgaon, Rohtak, Panipat"}
              />
            </Link>
            <Link to={"/shubhamkirar"}>
              <Card
                name={"Shubham Kirar"}
                image={
                  "https://images.unsplash.com/photo-1601977218317-72e0996ecdfe?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={4.5}
                locations={"Ranchi, Bokaro, Dhanbad"}
              />
            </Link>
            <Link to={"/ayushioberoi"}>
              <Card
                name={"Ayushi Oberoi"}
                image={
                  "https://images.unsplash.com/photo-1676385901184-b1884f3f2979?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={4.5}
                locations={"Shimla, Kullu, Manali"}
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "andhra pradesh" ? (
          <>
            <Link to={"/ayushsingh"}>
              <Card
                name={"Ayush Singh"}
                image={
                  "https://images.unsplash.com/photo-1468218457742-ee484fe2fe4c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={4}
                locations={
                  "Visakhapatnam, Vijayawada, Amaravati, Guntur, Kurnool"
                }
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "arunachal pradesh" ? (
          <>
            <Link to={"/hemanttiwari"}>
              <Card
                name={"Hemant Tiwari"}
                image={
                  "https://plus.unsplash.com/premium_photo-1678703870782-918c21aac2b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={3.5}
                locations={"Itanagar, Pasighat, Tawang"}
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "bihar" ? (
          <>
            <Link to={"/goldykumari"}>
              <Card
                name={"Goldy Kumari"}
                image={
                  "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={5}
                locations={"Patna, Darbhanga, Gaya"}
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "assam" ? (
          <>
            <Link to={"/shivamsahu"}>
              <Card
                name={"Shivam Sahu"}
                image={
                  "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={3}
                locations={"Guwahati, Silchar, Digboi"}
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "chhattisgarh" ? (
          <>
            <Link to={"/radhamishra"}>
              <Card
                name={"Radha Mishra"}
                image={
                  "https://images.unsplash.com/photo-1591980896142-4e36328411ec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={3.5}
                locations={"Raipur, Bhilai, korba"}
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "goa" ? (
          <>
            <Link to={"/himanshumeena"}>
              <Card
                name={"Himanshu Meena"}
                image={
                  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={2.5}
                locations={"Fort Aguada, Baga Beech, Arambol Beech"}
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "gujarat" ? (
          <>
            <Link to={"/jethalalgada"}>
              <Card
                name={"Jethalal Gada"}
                image={
                  "https://static.india.com/wp-content/uploads/2021/12/pjimage-39-5.jpg?impolicy=Medium_Widthonly&w=700"
                }
                rating={4.5}
                locations={"Surat, Ahmedabad, Navrati"}
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "haryana" ? (
          <>
            <Link to={"/elvishyadav"}>
              <Card
                name={"Elvish Yadav"}
                image={
                  "https://imgs.search.brave.com/bctbf3SmMC6B549lir8saUEaiPyYfT9O8GB1BX3JRn8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhldHZqdW5raWVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMS9FbHZp/c2hZYWRhdi0uanBn"
                }
                rating={1}
                locations={"Gurgaon, Rohtak, Panipat"}
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "jharkhand" ? (
          <>
            <Link to={"/shubhamkirar"}>
              <Card
                name={"Shubham Kirar"}
                image={
                  "https://images.unsplash.com/photo-1601977218317-72e0996ecdfe?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={4.5}
                locations={"Ranchi, Bokaro, Dhanbad"}
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "himachal pradesh" ? (
          <>
            <Link to={"/ayushioberoi"}>
              <Card
                name={"Ayushi Oberoi"}
                image={
                  "https://images.unsplash.com/photo-1676385901184-b1884f3f2979?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={4.5}
                locations={"Shimla, Kullu, Manali"}
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "karnataka" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "kerala" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "madhya pradesh" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "maharashtra" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "manipur" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "meghalaya" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "mizoram" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "nagaland" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "odisha" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "punjab" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "rajasthan" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "sikkim" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "tamil nadu" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "telangana" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "tripura" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "uttar pradesh" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "uttarakhand" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "west bengal" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "andaman and nicobar islands" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "delhi" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "puducherry" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "ladakh" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "jammu and kashmir" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
        {state == "dadra and nagar haveli and daman and diu" ? (
          <>
            <Link to={"/"}>
              <Card name={"/"} image={""} rating={4.5} locations={""} />
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default BookGuide;
