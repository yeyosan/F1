import React, { JSX, useState } from "react";
import { Formik, Form } from "formik";
import {
  Alert,
  Button,
  DialogActions,
  DialogContent,
  Fade,
  Slide,
  TextField,
} from "@mui/material";
import { RankingTabs, driverInputsConfig, teamInputsConfig } from "./constants";
import { useData } from "../DataProvider";
import { addNewItem } from "../../fetch";
import type { FormikErrors, FormikHelpers, FormikProps } from "formik";
import type { Values, InputConfig } from "./constants";

interface Props {
  closeDialog: () => void;
}

const AddItemForm = ({ closeDialog }: Props): JSX.Element => {
  const { selectedRankingTab } = useData();
  const isDriverTab = selectedRankingTab === RankingTabs.DRIVERS;
  const inputsConfig = isDriverTab ? driverInputsConfig : teamInputsConfig;

  const [isAlertShown, setIsAlertShown] = useState<boolean>(false);

  const getInitialValues = (inputsConfig: Array<InputConfig>): Values =>
    inputsConfig.reduce(
      (prevValues: Values, { key, initialValue }: InputConfig) => ({
        ...prevValues,
        [key]: initialValue,
      }),
      {}
    );

  const validateValues = (values: Values): FormikErrors<Values> => {
    const errors: FormikErrors<Values> = {};

    for (let [key, value] of Object.entries(values)) {
      if (value === "") {
        errors[key] = "Field required";
      }
    }
    return errors;
  };

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setIsAlertShown(false);
    setSubmitting(true);

    try {
      await addNewItem(values);
      closeDialog();
    } catch {
      setIsAlertShown(true);
    } finally {
      setSubmitting(false);
    }
  };

  const initialValues = getInitialValues(inputsConfig);

  return (
    <>
      {isAlertShown && (
        <Fade in>
          <Alert severity="error">There was an error, please try later.</Alert>
        </Fade>
      )}
      <Formik
        initialValues={initialValues}
        initialErrors={validateValues(initialValues)}
        validate={validateValues}
        onSubmit={handleSubmit}
        onReset={closeDialog}
      >
        {({
          handleChange,
          values,
          errors,
          isSubmitting,
        }: FormikProps<Values>) => (
          <Form>
            <DialogContent dividers style={{ minWidth: 290 }}>
              {inputsConfig.map(({ key, label, type, align }: InputConfig) => (
                <TextField
                  key={key}
                  name={key}
                  type={type}
                  onChange={handleChange}
                  label={label}
                  value={values[key]}
                  variant="standard"
                  margin="dense"
                  fullWidth
                  style={{ textAlign: align }}
                  required
                  disabled={isSubmitting}
                  helperText={errors[key] || undefined}
                />
              ))}
            </DialogContent>
            <DialogActions>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Save
              </Button>
              <Button
                type="reset"
                variant="outlined"
                color="primary"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { AddItemForm };
