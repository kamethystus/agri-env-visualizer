import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type SensorData = {
  distance: number;
  humidity: number;
  light: number;
  temperature: number;
  time: string;
}

const Dashboard: React.FC = () => {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "sensor-data"), orderBy("time"));
      const querySnapshot = await getDocs(q);
      const allData: SensorData[] = querySnapshot.docs.map((doc) => {
        const d = doc.data();
        return {
          distance: d.distance,
          humidity: d.humidity,
          light: d.light,
          temperature: d.temperature,
          time: d.time,
        };
      });

      const dailyData = allData
        .filter((d) => dayjs(d.time).isSame(selectedDate, "day"))
        .map((d) => ({
          ...d,
          time: dayjs(d.time).format("HH:mm"),
        }));
      setSensorData(dailyData);
    };
    fetchData();
  }, [selectedDate]);

  const renderChart = (title: string, dataKey: keyof SensorData) => {
    const strokeColors: Record<keyof SensorData, string> = {
      temperature: "#e53935",
      humidity: "#43a047",
      light: "#fb8c00",
      distance: "#29b6f6",
      time: "#000000",
    };

    return (
      <Box sx={{ padding: "6px", display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ padding: "6px", display: "flex", justifyContent: "center", width: "100%" }}>
          <Card sx={{ width: "100%", maxWidth: "1200px", padding: 2 }}>
            <CardHeader title={<Typography variant="h6">{title}</Typography>} />
            <CardContent sx={{ width: "100%" }}>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={sensorData}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey={dataKey} stroke={strokeColors[dataKey]} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </Box>
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 2 }}>
        <Box sx={{ marginBottom: 2 }}>
          <DatePicker
            label="表示日を選択"
            value={selectedDate}
            onChange={(newValue) => {
              if (newValue) {
                setSelectedDate(newValue);
              }
            }}
            format="YYYY/MM/DD"
            slotProps={{ textField: { size: "small" } }}
          />
        </Box>
        {renderChart("温度(°C)", "temperature")}
        {renderChart("湿度(％)", "humidity")}
        {renderChart("光度(lux)", "light")}
        {renderChart("水面距離(mm)", "distance")}
      </Box>
    </LocalizationProvider>
  );
};

export default Dashboard;
