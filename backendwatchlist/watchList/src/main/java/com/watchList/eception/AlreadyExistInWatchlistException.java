package com.watchList.eception;

public class AlreadyExistInWatchlistException extends Exception{
    public AlreadyExistInWatchlistException(String msg)
    {
        super(msg);
    }
}
