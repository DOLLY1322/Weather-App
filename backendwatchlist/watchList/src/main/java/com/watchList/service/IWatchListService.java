package com.watchList.service;

import com.watchList.dto.AddToWatchList;
import com.watchList.dto.CityWeatherDetails;
import com.watchList.dto.RemoveFromWatchList;
import com.watchList.eception.AlreadyExistInWatchlistException;
import com.watchList.eception.WeatherListEmptyException;
import com.watchList.eception.WeatherNotFound;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.util.List;
@Validated
public interface IWatchListService {
    CityWeatherDetails addToWatchList(@Valid AddToWatchList requestData) throws AlreadyExistInWatchlistException;
    void removeFavorite(@Valid RemoveFromWatchList requestData) throws WeatherNotFound;
    List<CityWeatherDetails> list(@NotBlank String userName) ;

}
