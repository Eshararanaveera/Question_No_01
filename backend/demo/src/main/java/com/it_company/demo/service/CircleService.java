package com.it_company.demo.service;

import com.it_company.demo.dto.CircleRequestDTO;
import com.it_company.demo.dto.CircleResponseDTO;

public interface CircleService {
    CircleResponseDTO calculateRadius(CircleRequestDTO request);
}