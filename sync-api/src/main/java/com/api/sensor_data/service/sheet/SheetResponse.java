package com.api.sensor_data.service.sheet;

import java.util.List;

public class SheetResponse {

    private String range;
    private List<List<String>> values;

    public String getRange() {
        return range;
    }

    public void setRange(String range) {
        this.range = range;
    }

    public List<List<String>> getValues() {
        return values;
    }

    public void setValues(List<List<String>> values) {
        this.values = values;
    }
}
