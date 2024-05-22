import { PayloadAction } from "@reduxjs/toolkit";
import { Effect, ForkEffect, call, put, takeLatest } from "redux-saga/effects";
import { dataActions } from "./slice";
import { postFavouritePlace } from "../../utils/services";
import {
  IFavouritePlaceReq,
  IPostFavouritePlaceOutput,
} from "../../utils/interfaces";

function* dataSaga(
  action: PayloadAction<IFavouritePlaceReq>
): Generator<Effect, void> {
  const res = (yield call(
    postFavouritePlace,
    action.payload
  )) as IPostFavouritePlaceOutput;
  if (res.success && res.data) {
    yield put(dataActions.getSuccess(res.data));
  } else {
    yield put(dataActions.getFail(res.errorMessage || ""));
  }
}

export default function* dataSagas(): Generator<ForkEffect, void> {
  yield takeLatest(dataActions.get, dataSaga);
}
