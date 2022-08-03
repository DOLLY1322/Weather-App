package com.watchList.controller;

import com.watchList.dto.AddToWatchList;
import com.watchList.dto.CityWeatherDetails;
import com.watchList.dto.RemoveFromWatchList;
import com.watchList.eception.AlreadyExistInWatchlistException;
import com.watchList.eception.WeatherListEmptyException;
import com.watchList.eception.WeatherNotFound;
import com.watchList.service.IWatchListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favoriteWeather")
public class WatchListController {
    @Autowired
    private IWatchListService service;

    @PostMapping("/add")
    public CityWeatherDetails add(@RequestBody AddToWatchList requestData) throws AlreadyExistInWatchlistException
    {
        CityWeatherDetails desired=service.addToWatchList(requestData);
        return desired;
    }

    @GetMapping("/findByUserName/{userName}")
    public List<CityWeatherDetails> cityWeatherDetailsList(@PathVariable String userName) throws WeatherListEmptyException
    {
        List<CityWeatherDetails> listOfCityWeather=service.list(userName);
        return  listOfCityWeather;
    }

    @DeleteMapping("/delete")
    public void removeFavoriteCityWeather(@RequestBody RemoveFromWatchList requestData) throws WeatherNotFound {

        service.removeFavorite(requestData);
    }

}
