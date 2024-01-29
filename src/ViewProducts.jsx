import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import { data } from "./data";
import Card from "./Card";
import "./ViewProducts.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
  Radio,
  RadioGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";

export default function ViewProducts({ openDialog, setOpenDialog }) {
  const [filteredItem, setFilteredItem] = useState([]);
  const [brands, setBrands] = useState([]);
  const rating = ["5", "4", "3"];
  const [brandChange, setBrandChange] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [brandSelectedData, setBrandSelectedData] = useState();
  const [priceChange, setPriceChange] = useState([]);
  const [selectedprice, setSelectedPrice] = useState();
  const [priceSelectedData, setPriceSelectedData] = useState("");
  const [ratingChange, setRatingChange] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");

  const handleSearch = (e) => {
    const filterData = data?.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredItem(filterData);
  };

  useEffect(() => {
    setBrandSelectedData(data);
    setPriceSelectedData(data);
  }, [data]);

  useEffect(() => {
    setFilteredItem(data);
    const brand = data?.map((item) => item.brand);
    const uniqueBrands = Array.from(new Set(brand));
    setBrands(uniqueBrands);
  }, [data]);

  useEffect(() => {
    if (brandChange?.length === 0) {
      setFilteredItem(data);
      setBrandSelectedData(data);
    } else {
      const filterdBrand = data?.filter((item) =>
        brandChange.includes(item.brand)
      );
      setFilteredItem(filterdBrand);
      setBrandSelectedData(filterdBrand);
    }
  }, [selectedBrand, brandChange]);

  const handleBrandChange = (e) => {
    const value = e.target.value;
    setBrandChange(value);
    if (e.target.checked) {
      setBrandChange([...brandChange, value]);
    } else {
      setBrandChange(brandChange.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    if (
      priceChange.includes("Under 500") &&
      priceChange.includes("Above 500")
    ) {
      // If both options are selected, show all data
      setFilteredItem(brandSelectedData);
      setPriceSelectedData(brandSelectedData);
    } else if (priceChange.length === 0) {
      // If no prices are selected, show all data
      setFilteredItem(brandSelectedData);
      setPriceSelectedData(brandSelectedData);
    } else {
      const filteredPrices = brandSelectedData?.filter((item) => {
        if (priceChange.includes("Under 500")) {
          return item.price <= 500;
        } else if (priceChange.includes("Above 500")) {
          return item.price > 500;
        }
        return false;
      });

      setFilteredItem(filteredPrices);
      setPriceSelectedData(filteredPrices);
    }
  }, [priceChange, brandSelectedData]);

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setPriceChange([...priceChange, value]);
    } else {
      setPriceChange(priceChange.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    if (ratingChange?.length === 0) {
      setFilteredItem(data);
    } else {
      const filteredBrand = priceSelectedData?.filter((item) =>
        ratingChange.includes(String(item.rating))
      );

      setFilteredItem(filteredBrand);
    }
  }, [ratingChange, selectedRating]);

  const handleRatingChange = (e) => {
    const value = e.target.value;
    setRatingChange(value);
    if (e.target.checked) {
      setRatingChange([...ratingChange, value]);
    } else {
      setRatingChange(ratingChange.filter((item) => item !== value));
    }
  };

  return (
    <Dialog
      fullScreen
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      PaperProps={{
        sx: {
          backgroundColor: "white",
        },
      }}
    >
      <div>
        <div style={{ position: "relative", top: "20px", left: "95%" }}>
          <CloseIcon onClick={() => setOpenDialog(false)} />
        </div>
        <div className="searchcontainer">
          <div className="textField">
            <input
              onChange={handleSearch}
              className="inputbox"
              placeholder="Search"
            ></input>
          </div>
        </div>

        <div className="Products">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={18}>
              <Grid className="firstGrid" item xs={4}>
                <p className="searchResult">Search Result</p>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Brand</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup>
                      {brands?.map((item) => (
                        <FormControlLabel
                          key={item}
                          value={item}
                          control={
                            <Checkbox
                              onChange={handleBrandChange}
                              value={item}
                            />
                          }
                          label={item}
                        />
                      ))}
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Price Range</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            value={"Under 500"}
                            onChange={handlePriceChange}
                          />
                        }
                        label="Under 500"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value={"Above 500"}
                            onChange={handlePriceChange}
                          />
                        }
                        label="Above 500"
                      />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Rating</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup>
                      {rating.map((item) => {
                        return (
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={handleRatingChange}
                                value={item}
                              />
                            }
                            style={{ margin: 0, height: 35 }}
                            label={
                              <Rating
                                readOnly
                                name="simple-controlled"
                                value={item}
                              />
                            }
                          />
                        );
                      })}
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid className="SecondGrid" item xs={14}>
                <Card data={filteredItem?.length > 0 ? filteredItem : data} />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </Dialog>
  );
}
