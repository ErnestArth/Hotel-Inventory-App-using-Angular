import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  hotelName = 'Wilson hotel';
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Television, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/s/photos/hotel',
      checkInTime: new Date('08-10-2024'),
      checkoutTime: new Date('08-12-2024'),
      rating: 4.3,
    },
    {
      roomNumber: 2,
      roomType: 'Standard Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Television, Bathroom',
      price: 300,
      photos: 'https://unsplash.com/s/photos/hotel',
      checkInTime: new Date('08-10-2024'),
      checkoutTime: new Date('08-12-2024'),
      rating: 3.947,
    },
    {
      roomNumber: 3,
      roomType: 'Suite Room',
      amenities:
        'Air Conditioner, Free Wi-Fi, Television, Bathroom, Kitchen, Living Room',
      price: 1700,
      photos: 'https://unsplash.com/s/photos/hotel',
      checkInTime: new Date('08-10-2024'),
      checkoutTime: new Date('08-12-2024'),
      rating: 3.858,
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
}
