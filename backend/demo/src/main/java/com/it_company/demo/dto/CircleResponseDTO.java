package com.it_company.demo.dto;

public class CircleResponseDTO {
    private Double radius;
    private String error;

    public CircleResponseDTO() {}

    public CircleResponseDTO(Double radius, String error) {
        this.radius = radius;
        this.error = error;
    }

    public Double getRadius() { return radius; }
    public void setRadius(Double radius) { this.radius = radius; }

    public String getError() { return error; }
    public void setError(String error) { this.error = error; }
}