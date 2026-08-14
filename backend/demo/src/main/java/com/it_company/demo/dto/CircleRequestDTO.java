package com.it_company.demo.dto;

public class CircleRequestDTO {
    private Double g;
    private Double f;
    private Double c;

    public CircleRequestDTO() {}

    public CircleRequestDTO(Double g, Double f, Double c) {
        this.g = g;
        this.f = f;
        this.c = c;
    }

    public Double getG() { return g; }
    public void setG(Double g) { this.g = g; }

    public Double getF() { return f; }
    public void setF(Double f) { this.f = f; }

    public Double getC() { return c; }
    public void setC(Double c) { this.c = c; }
}