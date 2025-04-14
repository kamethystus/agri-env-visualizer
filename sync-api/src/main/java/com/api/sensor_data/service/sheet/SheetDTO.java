package com.api.sensor_data.service.sheet;


import lombok.Value;

import java.util.List;

@Value
public class SheetDTO {
    String time;
    Double distance;
    Double light;
    Double temperature;
    Double humidity;

    public static SheetDTO fromList(List<String> row) {
        try {
            return new SheetDTO(
                    row.get(0),
                    Double.parseDouble(row.get(1)),
                    Double.parseDouble(row.get(2)),
                    Double.parseDouble(row.get(3)),
                    Double.parseDouble(row.get(4))
            );
        } catch (IndexOutOfBoundsException | NumberFormatException e) {
            throw new IllegalArgumentException("Invalid row data: " + row, e);
        }
    }
}
