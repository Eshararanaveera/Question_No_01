package com.it_company.demo.service.impl;

import com.it_company.demo.dto.CircleRequestDTO;
import com.it_company.demo.dto.CircleResponseDTO;
import com.it_company.demo.service.CircleService;
import org.springframework.stereotype.Service;

@Service
public class CircleServiceImpl implements CircleService {

    @Override
    public CircleResponseDTO calculateRadius(CircleRequestDTO request) {
        if (request.getG() == null || request.getF() == null || request.getC() == null) {
            return new CircleResponseDTO(null, "Please enter valid numbers for g, f and c.");
        }

        double g = request.getG();
        double f = request.getF();
        double c = request.getC();

        double underRoot = (g * g) + (f * f) - c;

        if (underRoot <= 0) {
            return new CircleResponseDTO(null, "Invalid circle: (g² + f² - c) must be greater than 0.");
        }

        double radius = Math.sqrt(underRoot);
        return new CircleResponseDTO(radius, null);
    }
}