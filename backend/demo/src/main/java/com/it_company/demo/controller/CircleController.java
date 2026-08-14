package com.it_company.demo.controller;

import com.it_company.demo.dto.CircleRequestDTO;
import com.it_company.demo.dto.CircleResponseDTO;
import com.it_company.demo.service.CircleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/circle")
@CrossOrigin(origins = "http://localhost:5173") // React App URL
public class CircleController {

    private final CircleService circleService;

    public CircleController(CircleService circleService) {
        this.circleService = circleService;
    }

    @PostMapping("/calculate")
    public ResponseEntity<CircleResponseDTO> calculateRadius(@RequestBody CircleRequestDTO request) {
        CircleResponseDTO response = circleService.calculateRadius(request);
        return ResponseEntity.ok(response);
    }
}