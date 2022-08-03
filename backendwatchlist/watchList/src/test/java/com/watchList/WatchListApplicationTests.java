package com.watchList;

import com.watchList.dto.CityWeatherDetails;
import com.watchList.entity.CityWeather;
import com.watchList.repository.WatchListRepository;
import com.watchList.service.IWatchListService;
import com.watchList.service.WatchServiceImpl;
import com.watchList.util.CityWeatherUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;


@ExtendWith(MockitoExtension.class)
class WatchListApplicationTests {
	private IWatchListService service;

	@Test
	void contextLoads() {
	}


	/**
	 * scenerio when weather is present in the city
	 * input: coutnry=India, city=haryana, userName=shivam
	 */
//	@Test
//	public void TestForRemoveFavorite_1()
//	{
//
//
//	}




}
